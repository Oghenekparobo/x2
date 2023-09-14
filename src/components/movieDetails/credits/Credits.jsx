import Credit from "./credit/Credit";
import { FaStar } from "react-icons/fa";

const Credits = ({ credits, data, loading }) => {
  const vote_average = data?.data?.vote_average;
  const vote_count = data?.data?.vote_count;

  return (
    <section className={`credits ${loading ? "animate-pulse" : ""}`}>
      {!loading ? (
        <div className="flex flex-col justify-between items-center  lg:flex-row">
          <Credit data={data} />
          <div className="movie-ratings flex items-center">
            <div className="star-icon">
              <FaStar color="gold" />
            </div>
            <p className="font-bold text-gray-300 tracking-wide text-lg ">
              {vote_average?.toFixed(1)}
            </p>
            <span className="border-r-2  border-gray-500 h-4 w-4"></span>
            <p className="font-bold text-gray-600 tracking-wide text-lg mx-2">
              {vote_count}k
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <div className="movie-ratings flex items-center backdrop-blur-lg animate-pulse">
            <div className="star-icon"></div>
            <p className="font-bold text-gray-300 tracking-wide text-lg">4.5</p>
            <span className="border-r-2 border-gray-500 h-4 w-4"></span>
            <p className="font-bold text-gray-600 tracking-wide text-lg mx-2"></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Credits;
