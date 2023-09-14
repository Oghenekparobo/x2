import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import PlayImg from "../../../assets/nav/Play.svg";
import Ratings from "../../../components/sub-components/Ratings";
import { mapVoteCount, voteAverage } from "../../../utils/util";
import ImageLoader from "../../../components/imageLoader/ImageLoader";
import BannerLoader from "./BannerLoader";

const Banner = () => {
  const { url } = useSelector((store) => store.home);
  const [bannerData, setBannerData] = useState([]);

  const { data, loading } = useFetch("/movie/upcoming");
  //   console.log(data);
  useEffect(() => {
    if (data?.data?.results.length) {
      const randomData = data?.data?.results?.[Math.floor(Math.random() * 20)];
      const bg = url.backdrop + randomData?.backdrop_path;
      const banner_title = randomData?.title;
      const banner_vote_counted = randomData?.vote_count;
      const banner_vote_averaged = randomData?.vote_average;
      const banner_overview = randomData?.overview;

      const banner_vote_average = (banner_vote_averaged / 10) * 100;

      let banner_vote_count = mapVoteCount(banner_vote_counted, 600, 100);

      banner_vote_count = banner_vote_count.toFixed(1);

      const customData = {
        bg,
        banner_title,
        banner_vote_count,
        banner_vote_average,
        banner_overview,
      };

      setBannerData(customData);
    }
  }, [data]);

  //   console.log(bannerData);
  return (
    <header className="w-full h-full">
      {!loading ? (
        <div className="relative w-full">
          <div className="banner-bg">
            <ImageLoader
              className="h-full w-full absolute object-cover"
              src={bannerData?.bg}
            />
          </div>

          <div className="relative h-full px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 bg-gradient-to-r from-black to-white/10 ">
            <div className="banner-texts flex flex-col justify-center mx-auto my-10 px-8 md:my-0">
              <h1 className="title capitalize text-white text-md  font-bold max-w-md md:text-6xl">
                {bannerData?.banner_title}
              </h1>

              {/* ratings */}
              {bannerData && <Ratings data={bannerData} />}

              <div className="banner-desc text-white max-w-sm pt-8 tracking-wide leading-6">
                {bannerData?.banner_overview}
              </div>

              <button className="trailer text-white bg-custom-red flex items-center rounded-md my-8 px-4 space-x-4 py-2 max-w-[200px]">
                <span className="trailer_img">
                  <img src={PlayImg} alt="play-button" className="w-8 h-8" />
                </span>
                <span className="trailer__text capitalize font-bold tracking-wide">
                  watch trailer
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <BannerLoader />
      )}
    </header>
  );
};

export default Banner;
