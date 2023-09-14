import ImageLoader from "../../../components/imageLoader/ImageLoader";

const BannerLoader = () => {
  return (
    <header className="w-full h-full">
      <div className="relative w-full">
        <div className="banner-bg">
          <ImageLoader className="h-full w-full absolute object-cover" />
        </div>

        <div className="relative h-full px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 bg-gradient-to-r from-black to-white/10 ">
          <div className="banner-texts flex flex-col justify-center mx-auto my-10 px-8 md:my-0">
            <h1 className="title capitalize text-white text-md  font-bold max-w-md md:text-6xl">
              <div className="blur bg-white h-10 w-36 animate-pulse"></div>
            </h1>

            <div className="banner-desc text-white max-w-sm pt-8 tracking-wide leading-6">
              <div className="blur bg-white h-10 w-36 animate-pulse"></div>
              <div className="blur bg-white h-10 w-48 animate-pulse mt-4"></div>
              <div className="blur bg-white h-10 w-64 animate-pulse mt-4"></div>
            </div>

            <button className="trailer text-white bg-custom-red flex items-center rounded-md my-8 px-4 space-x-4 py-2 max-w-[200px]">
              <span className="trailer_img">
                {/* <img alt="play-button" className="w-8 h-8" /> */}
              </span>
              <span className="trailer__text capitalize font-bold tracking-wide">
                <div className="blur bg-white h-10 w-36 animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerLoader;
