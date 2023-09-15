import { Link, useParams } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Ratings from "../../components/sub-components/Ratings";
import Genres from "../../components/sub-components/Genres";
import heart from "../../assets/nav/Heart.svg";
import PosterFallback from "../../assets/nav/no-poster.png";
import { mapVoteCount } from "../../utils/util";
import LoadingCards from "../../components/featured/LoadingCards";
import { toast } from "react-toastify";

const SearchPage = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { query } = useParams();
  const { url } = useSelector((store) => store.home);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const res = await fetchDataFromAPI(
        `/search/multi?query=${query}&page=${pageNum}`
      );

      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const fetchNextPageData = () => {
    fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.data?.results) {
          setData({
            ...data,
            results: [...data.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

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
  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <section className="bg-teal-950 h-full w-full relative py-10 ">
      <Nav />
      <main className="px-14 mt-60 lg:mt-32 ">
        {!loading ? (
          data?.data?.results?.length > 0 ? (
            <>
              <div className="pageTitle my-20 apitalize text-3xl text-white lg:my-10 ">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.data?.total_pages}
                loader={<LoadingCards />}
              >
                {data?.data?.results.map((item, index) => {
                  const posterUrl = item.poster_path
                    ? url.poster + item.poster_path
                    : PosterFallback;
                  const year = dayjs(item.release_date).year();

                  let banner_vote_average = (item?.vote_average / 10) * 100;

                  let banner_vote_count = mapVoteCount(
                    item.vote_count,
                    600,
                    100
                  );

                  banner_vote_count = banner_vote_count.toFixed(1);

                  banner_vote_average = banner_vote_average.toFixed(1);
                  if (item.media_type === "person") return;
                  return (
                    <>
                      <main className="featured-section grid grid-cols-1 gap-20 md:grid-cols-4 xl:grid-cols-4">
                        {data?.data?.results?.map((item) => (
                          <div
                            className="featured-cards relative px-4 md:px-0"
                            data-testid="movie-card"
                            key={item.id}
                          >
                            <div className="poster cursor-pointer">
                              <Link to={`/movies/${item.id}`}>
                                <img
                                  src={posterUrl}
                                  alt="poster"
                                  data-testid="movie-poster"
                                />
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
                                <p
                                  data-testid="movie-title"
                                  className="font-bold text-white"
                                >
                                  {item.title || item.original_title}
                                </p>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </main>
                    </>
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )
        ) : (
          <main className="featured-section grid grid-cols-1 gap-20 md:grid-cols-4 xl:grid-cols-4">
            <LoadingCards />
          </main>
        )}
      </main>
    </section>
  );
};

export default SearchPage;
