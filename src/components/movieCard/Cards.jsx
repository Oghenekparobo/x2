import heart from "../../assets/nav/Heart.svg";
import PosterFallback from "../../assets/nav/no-poster.png";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import { mapVoteCount } from "../../utils/util";
import { Link } from "react-router-dom";
import Genres from "../sub-components/Genres";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Ratings from "../sub-components/Ratings";

const Cards = ({ data }) => {
  const { url } = useSelector((store) => store.home);

  const saveMovieHandler = (title) => {
    toast(`Saved ${title} `, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      {data &&
        data.slice(0, 10).map((item) => {
          const posterUrl = item.poster_path
            ? url.poster + item.poster_path
            : PosterFallback;
          const year = dayjs(item.release_date).year();

          let banner_vote_average = (item?.vote_average / 10) * 100;

          let banner_vote_count = mapVoteCount(item.vote_count, 600, 100);

          banner_vote_count = banner_vote_count.toFixed(1);

          banner_vote_average = banner_vote_average.toFixed(1);

          return (
            <div
              className="featured-cards relative px-4 md:px-0 "
              data-testid="movie-card"
              key={item.id}
            >
              <div className="poster cursor-pointer">
                <Link to={`/movies/${item.id}`}>
                  <img
                    src={posterUrl}
                    alt="poster"
                    data-testid="movie-poster"
                  />{" "}
                </Link>
                <span
                  className="save-movie cursor-pointer absolute top-0 right-0 px-4 py-4 m-3 bg-white/10 rounded-[50%]"
                  onClick={() => saveMovieHandler(item.title)}
                >
                  <img src={heart} alt="heart" />
                </span>
              </div>
              <div
                className="release-date py-2 text-gray-400"
                data-testid="movie-release-date"
              >{`USA, ${year}`}</div>
              <div className="title py-2">
                <Link to={`/movies/${item.id}`}>
                  <p data-testid="movie-title" className="font-bold">
                    {item.title}
                  </p>
                </Link>
              </div>
              {/* ratings */}
              <Ratings
                data={item}
                classname="feat"
                banner_vote_average={banner_vote_average}
                banner_vote_count={banner_vote_count}
              />
              {/* genres */}
              <Genres data={item.genre_ids.slice(0, 2)} />
            </div>
          );
        })}
    </>
  );
};

export default Cards;
