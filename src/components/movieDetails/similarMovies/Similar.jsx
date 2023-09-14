import { useSelector } from "react-redux";
import ListBlack from "../../../assets/sidebar/ListBlack.svg";
import PosterFallback from "../../../assets/nav/no-poster.png";
import ImageLoader from "../../imageLoader/ImageLoader";

const Similar = ({ data }) => {
  const { url } = useSelector((store) => store.home);
  console.log(data);
  return (
    <div className="relative">
      <div className="flex justify-between overflow-hidden">
        {data?.slice(0, 3).map((item, i) => {
          const posterUrl = item.poster_path
            ? url.poster + item.poster_path
            : PosterFallback;

          console.log(posterUrl);
          const isFirst = i === 0;
          const isLast = i === 2; // Assuming you only have 3 items

          return (
            <div
              key={item.id}
              className={`w-full lg:w-[calc(33.33% - 1rem)] h-[180px]  rounded-md overflow-hidden`}
            >
              <ImageLoader
                src={posterUrl}
                className={`w-full h-full object-cover ml-1 ${
                  isFirst && isLast ? "rounded-md" : ""
                } `}
              />
            </div>
          );
        })}
      </div>
      <div className="bg-white/10 text-black font-bold px-6 py-2 flex items-center space-x-4 rounded-md absolute bottom-0 left-0 w-full">
        <span>
          <img src={ListBlack} alt="list black" />
        </span>
        <span className="text-sm  text-white font-bold">
          The Best Movies and Show in September
        </span>
      </div>
    </div>
  );
};

export default Similar;
