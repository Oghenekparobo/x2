import dayjs from "dayjs";
import { useSelector } from "react-redux";

const Credit = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  const _genres = data?.data?.genres?.map((g) => g.id);
  const title = data?.data?.title || data?.data?.original_title;

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="movie-titles-genres-ratings flex flex-col items-center space-x-2 lg:flex-row lg:space-x-4 my-6 text-sm">
      <p
        className="title font-bold text-gray-600 tracking-wide text-sm md:text-lg lg:text-xl"
        data-testid="movie-title"
      >
        {title}
      </p>
      <span className="dot h-[0.2px] w-[0.2px] p-[3.1px] bg-gray-600 rounded-full hidden lg:block"></span>
      <p
        className="release-date font-bold text-gray-600 tracking-wide text-lg"
        data-testid="movie-release-date"
      >
        {dayjs(data?.data?.release_date).format("YYYY")}
      </p>
      <span className="dot h-[0.2px] w-[0.2px] p-[3.1px] bg-gray-600 rounded-full hidden lg:block"></span>
      <p className="parental-control font-bold text-gray-600 tracking-wide text-lg">
        PG-13
      </p>
      <span className="dot h-[0.2px] w-[0.2px] p-[3.1px] bg-gray-600 rounded-full hidden lg:block"></span>
      <p
        className="runtime font-bold text-gray-600 tracking-wide text-lg"
        data-testid="movie-runtime"
      >
        {toHoursAndMinutes(data?.data?.runtime)}
      </p>
      <span className="dot h-[0.2px] w-[0.2px] p-[3.1px] bg-gray-600 rounded-full hidden lg:block"></span>
      <div className="genres">
        <div className="genres flex space-x-6 my-4 text-custom-red">
          {_genres?.map((g) => {
            if (!genres[g]?.name) return;
            return (
              <div
                key={g}
                className="genre shadow-sm rounded-full border border-gray-100 px-6 font-bold py-2 text-sm "
              >
                {genres[g]?.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Credit;
