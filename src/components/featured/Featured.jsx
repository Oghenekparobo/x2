import { useState } from "react";
import ChevronRight from "../../assets/nav/ChevronRight.svg";
import useFetch from "../../hooks/useFetch";

import LoadingCards from "./LoadingCards";
import MovieCard from "../movieCard/MovieCard";

const Featured = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  return (
    <section className="featured-movies mx-auto px-12 my-14">
      <div className="heading flex justify-between items-center">
        <h1 className="font-bold uppercase my-8 text-sm md:text-4xl">
          featured movie
        </h1>

        <button disabled="disabled" className="flex capitalize">
          <span className="text-custom-red">see more</span>
          <span>
            <img src={ChevronRight} alt="ChevronRight" />
          </span>
        </button>
      </div>

      <main className="featured-section grid grid-cols-1 gap-20 md:grid-cols-4 xl:grid-cols-4">
        {!loading ? <MovieCard data={data?.data?.results} /> : <LoadingCards />}
      </main>
    </section>
  );
};

export default Featured;
