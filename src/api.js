import axios from "axios";
const baseUrl = "https://swapi.dev/api";

export default new (class api {
  async fetchMoviees() {
    return await axios
      .get(baseUrl + "/films")
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }
  async fetchPeople(people = "") {
    return await axios
      .get(people)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }
})();
