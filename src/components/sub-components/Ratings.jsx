import rotImg from "../../assets/nav/Rot.svg";
import imdbImg from "../../assets/nav/Imdb.svg";

const Ratings = ({
  data,
  classname,
  banner_vote_average,
  banner_vote_count,
}) => {
  return (
    <div className="ratings flex space-x-6">
      <div className="imdb flex items-center space-x-3">
        <span className="imdb_img">
          <img src={imdbImg} alt="imdb-logo" />
        </span>
        <span
          className={`imdb text-gray-200 ${
            classname === "feat" && "text-gray-600 font-bold"
          }`}
        >
          {data?.banner_vote_count || banner_vote_count}/100
        </span>
      </div>
      <div className="rot_tomato flex items-center space-x-3">
        <span className="rot_img ">
          <img src={rotImg} alt="rotten_tomatoes_logo" />
        </span>
        <span
          className={`rot-tomato text-gray-200 ${
            classname === "feat" && "text-gray-600 font-bold"
          }`}
        >
          {data?.banner_vote_average || banner_vote_average}%
        </span>
      </div>
    </div>
  );
};

export default Ratings;
