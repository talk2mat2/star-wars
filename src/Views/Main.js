import React from "react";
import api from "../api";
import Table from "../components/table";
import { AppContext } from "../context";
import Movieselect from "./MoviewSelect";

const Main = () => {
  const [data, setData] = React.useState([]);
  const [charact, setCharact] = React.useState([]);
  const [openTable, setOpenTable] = React.useState(false);
  const [loading, setLoading] = React.useState([]);
  const [title, setTitle] = React.useState("");

  const fetchFilms = async () => {
    setLoading(true);
    await api
      .fetchMoviees()
      .then((res) => {
        setLoading(false);
        setData(res?.results);
      })
      .catch((err) => {
        alert("an error occured");
        setLoading(false);
      });
  };
  const fetchCharacters = async (char = [], title = "") => {
    setLoading(true);
    setTitle(title)
    setOpenTable(false);
    let charResult = [];
    for (let i = 0; i < char.length; i++) {
      await api.fetchPeople(char[i]).then((res) => charResult.push(res));
    }
    setCharact(charResult);
    console.log(charResult);
    setLoading(false);
    setOpenTable(true);
  };
  React.useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <AppContext.Provider value={{ data, fetchCharacters }}>
      <div className="container home">
        <div className="main-header">
          <img src="logo.png" alt="" />
          {loading && <img src="spin.gif" width={20} alt="" />}
          {/* <div className="slider"></div> */}
        </div>
        <div className="content flex-wrap">
          <Movieselect data={data} />
          {openTable && <Table charact={charact} title={title} />}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Main;
