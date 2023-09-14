import Sidebar from "../../components/sidebar/Sidebar";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Details = () => {
  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/movie/${id}/credits`
  );

  return (
    <main>
      <section className="detail-sections flex flex-col lg:flex-row">
        <Sidebar />
        <MovieDetails
          video={data?.data?.results?.[0]}
          crew={credits?.data?.crew}
          data={data}
          cast={credits?.data?.cast}
        />
      </section>
    </main>
  );
};

export default Details;
