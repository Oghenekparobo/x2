import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Credits from "./credits/Credits";
import Overview from "./overview/Overview";
import Video from "./video/Video";
import Author from "./Authors/Author";
import Similar from "./similarMovies/Similar";

const MovieDetails = ({ video, crew, cast }) => {
  const { id } = useParams();
  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );
  const { data, loading } = useFetch(`/movie/${id}`);
  const { data: similiarData, loading: similarLoading } = useFetch(
    `/movie/${id}/similar`
  );

  console.log(crew);
  return (
    <main className="max-w-screen-2xl w-full h-full py-12 px-6">
      <Video videoID={video?.key} />
      <Credits credits={crew} data={data} loading={loading} />
      <Overview data={data} loading={loading} />
      <div className="flex flex-col justify-between items-center my-14 lg:flex-row">
        <div className="w-full lg:w-[70%] max-w-full lg:max-w-[70%] mb-4 lg:mb-0">
          <Author
            director={director}
            writer={writer}
            cast={cast}
            loading={loading}
          />
        </div>
        <div className="w-full lg:w-auto">
          <Similar
            data={similiarData?.data?.results}
            loading={similarLoading}
          />
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
