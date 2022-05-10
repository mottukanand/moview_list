import React, { createContext, useEffect, useState } from "react";

const MovieDetailsContext = createContext(null);

const MovieDetailsProvider = (props) => {
  const [initialMovieData, setInitialMovieData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const addMovieData = (data) => {
    let movies = JSON.parse(JSON.stringify(movieData));
    movies.push(data);
    setMovieData(movies);
    setInitialMovieData(movies);
  };

  return (
    <MovieDetailsContext.Provider
      value={{
        movieData: movieData,
        initialMovieData: initialMovieData,
        addMovieData: addMovieData,
        setMovieData: setMovieData,
      }}
    >
      {props.children}
    </MovieDetailsContext.Provider>
  );
};

const MovieDetailsConsumer = MovieDetailsContext.Consumer;

export { MovieDetailsContext, MovieDetailsProvider, MovieDetailsConsumer };
