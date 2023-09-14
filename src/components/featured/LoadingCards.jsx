import React from "react";
import PlaceholderImage from "../../assets/nav/no-poster.png"; // Replace with your placeholder image
import heart from "../../assets/nav/Heart.svg";

const LoadingCards = () => {
  // Create an array of placeholders for loading
  const placeholders = Array.from({ length: 10 }, (_, index) => index);

  return (
    <>
      {placeholders.map((index) => (
        <div
          className="featured-cards relative px-4 md:px-0 animate-pulse"
          data-testid="movie-card"
          key={index}
        >
          <div className="poster">
            <img
              src={PlaceholderImage}
              alt="poster"
              data-testid="movie-poster"
            />
            <span className="save-movie cursor-pointer absolute top-0 right-0 px-4 py-4 m-3 bg-white/10 blur rounded-[50%]">
              <img src={heart} alt="heart" />
            </span>
          </div>

          <div
            className="release-date py-2 text-gray-400 blur"
            data-testid="movie-release-date"
          ></div>

          <div className="title py-2">
            <p data-testid="movie-title blur" className="font-bold"></p>
          </div>

          <div className="ratings">
            <div className="imdb flex items-center space-x-3">
              <div className="imdb_img blur"></div>
              <div className="imdb text-gray-200 blur"></div>
            </div>
            <div className="rot_tomato flex items-center space-x-3">
              <div className="rot_img blur"></div>
              <div className="rot_tomato text-gray-200 blur"></div>
            </div>
          </div>

          {/* Placeholder for Genres */}
          <div className="genres">
            <div className="loading-genre"></div>
            <div className="loading-genre"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingCards;
