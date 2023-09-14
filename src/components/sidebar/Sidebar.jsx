import logo from "../../assets/sidebar/Logo.svg";
import home from "../../assets/sidebar/Home.svg";
import movies from "../../assets/sidebar/MovieProjector.svg";
import tv from "../../assets/sidebar/TvShow.svg";
import upcoming from "../../assets/sidebar/Calendar.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="px-8 py-8 flex flex-col items-center border border-gray-300 rounded-tr-[40px] rounded-br-[40px] space-y-10 lg:space-y-22 h-full md:w-full lg:w-[226px] lg:h-screen lg:sticky lg:top-0">
      <div className="sidebar-logo h-40 w-40">
        <img src={logo} alt="sidebar-logo" className="w-full h-full" />
      </div>
      <div className="sidebar-navigation justify-center items-center">
        <div className="flex flex-col  w-full space-y-6 lg:space-y-16  ">
          <Link to="/">
            <button className="flex items-center space-x-2 w-full h-full hover:bg-custom-red/10 hover:p-4 hover:border-r-2 hover:border-custom-red transition-all duration-200 lg:space-x-4 ">
              <span>
                <img src={home} alt="sidebar-home-logo" />
              </span>
              <span className="text-gray-400 capitalize font-semi-bold  hover:text-custom-red hover:font-bold">
                home
              </span>
            </button>
          </Link>

          <button className="flex items-center space-x-2 w-full h-full hover:bg-custom-red/10 hover:p-4 hover:border-r-2 hover:border-custom-red transition-all duration-200 lg:space-x-4">
            <span>
              <img src={movies} alt="sidebar-movie-logo" />
            </span>
            <span className="text-gray-400 capitalize font-semi-bold">
              movies
            </span>
          </button>
          <button className="flex items-center space-x-2 w-full h-full hover:bg-custom-red/10 hover:p-4 hover:border-r-2 hover:border-custom-red transition-all duration-200 lg:space-x-4">
            <span>
              <img src={tv} alt="sidebar-tv-logo" />
            </span>
            <span className="text-gray-400 capitalize font-semi-bold">
              tv series
            </span>
          </button>
          <button className="flex items-center space-x-2 w-full h-full hover:bg-custom-red/10 hover:p-4 hover:border-r-2 hover:border-custom-red transition-all duration-200 ">
            <span>
              <img src={upcoming} alt="sidebar-upcoming-logo" />
            </span>
            <span className="text-gray-400 capitalize font-semi-bold">
              upcoming
            </span>
          </button>
        </div>
      </div>
      <div className="sidebar-miscellanous rounded-lg  my-14 bg-custom-red/10 border border-custom-red-light py-3 max-w-sm flex flex-col items-center space-y-4 px-4">
        <h5 className="text-gray-600 font-bold">
          Play movie quizes and earn <br />
          free tickets
        </h5>
        <p className="text-sm text-gray-500 font-bold">
          50k people are playing now
        </p>
        <button className="text-custom-red bg-custom-red/10 font-bold py-2 tracking-wide px-4 text-sm rounded-full">
          Start playing
        </button>
      </div>
      <div className="logout">
        <button className="flex items-center space-x-4 w-full h-full hover:bg-custom-red/10 hover:-4 hover:border-r-2 hover:border-custom-red transition-all duration-200">
          <span>
            <img src={upcoming} alt="sidebar-upcoming-logo" />
          </span>
          <span className="text-gray-500 capitalize font-bold text-xl">
            Log out
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
