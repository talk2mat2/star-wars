import React from "react";
import MovieItem from "../components/MoviewItem";

const Movieselect = ({ data = [] }) => {
  const [show, setShow] = React.useState(false);

  const openToggle = () => {
    setShow(!show);
  };

  function sortDate(a, b) {
    return new Date(a.release_date) - new Date(b.release_date);
  }
  return (
    <section id="select-container">
      <div onClick={openToggle} className="select-box">
        <h3>Select movie</h3>
      </div>
      <li id="movielist" className={`${show && "show"}`}>
        {show &&
          data?.sort(sortDate).map((movie) => <MovieItem movie={movie} />)}
      </li>
    </section>
  );
};

export default Movieselect;
