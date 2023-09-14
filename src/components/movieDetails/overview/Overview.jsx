import tickets from "../../../assets/sidebar/TwoTickets.svg";
import list from "../../../assets/sidebar/List.svg";

const Overview = ({ data, loading }) => {
  return (
    <section className="flex justify-between flex-col my-4 lg:flex-row">
      {loading ? (
        <div className="overview-loading max-w-2xl h-40 backdrop-blur-lg animate-pulse"></div>
      ) : (
        <>
          <p className="overview max-w-2xl leading-6 text-gray-950 font-semi-bold">
            {data?.data?.overview}
          </p>
          <div className="overview-widgets flex flex-col space-y-4">
            <button className="bg-custom-red text-white px-12 py-3 flex items-center space-x-4 capitalize rounded-md font-bold">
              <span>
                <img src={tickets} alt="tickets" />
              </span>
              <span className="text-lg tracking-wide">see showtimes</span>
            </button>
            <button className="bg-custom-red/10 text-black font-bold px-6 py-2 flex items-center space-x-4 rounded-md">
              <span>
                <img src={list} alt="list" />
              </span>
              <span className="text-lg tracking-wide">More watch options</span>
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Overview;
