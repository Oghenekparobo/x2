import dropDown from "../../../assets/sidebar/ExpandArrow.svg";

const Author = ({ director, writer, cast, loading }) => {
  return (
    <section>
      <div className="creators text-lg leading-8 ">
        {director?.length > 0 && (
          <p className="text-gray-500 font-bold">
            Director:
            <span className="pl-2 text-custom-red font-bold">
              {director?.map((d, i) => (
                <span key={i}>
                  {d.name}
                  {director.length - 1 !== i && ", "}
                </span>
              ))}
            </span>
          </p>
        )}

        {writer?.length > 0 && (
          <p className="text-gray-500 font-bold mt-2 lg:mt-0">
            Writers:
            <span className="pl-2 text-custom-red font-bold">
              {writer?.map((d, i) => (
                <span key={i}>
                  {d.name}
                  {writer.length - 1 !== i && ", "}
                </span>
              ))}
            </span>
          </p>
        )}

        {cast?.length > 0 && (
          <p className="text-gray-500 font-bold mt-2 lg:mt-0">
            Stars:{" "}
            <span className="pl-2 text-custom-red font-bold">
              {cast?.slice(0, 3).map((item, i) => (
                <span key={i}>
                  {item.name}
                  {i !== cast.length - 1 && ","}
                </span>
              ))}
            </span>
          </p>
        )}
      </div>

      <div className="author-widgets my-10 flex flex-col lg:flex-row">
        <button className="bg-custom-red text-white px-6 py-3 mb-2 lg:mb-0 rounded-md font-bold ">
          Top rated movie
        </button>
        <button className="px-6 py-3 border border-gray-100 w-full lg:w-[50%] rounded-md">
          <span className="flex justify-between items-center">
            <span className="text-gray-500 font-bold tracking-wider">
              Awards 9 nomination
            </span>
            <span>
              <img src={dropDown} alt="drop-down-arrow" />
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Author;
