import React, { useContext } from "react";
import { AppContext } from "../context";

const MovieItem = ({ movie }) => {
  const { fetchCharacters } = useContext(AppContext);
  return (
    <li
      onClick={() => fetchCharacters(movie?.characters,movie?.title,movie?.opening_crawl)}
      className="select-options"
    >
      <h5>{movie?.title}</h5>
    </li>
  );
};

export default MovieItem;
