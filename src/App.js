import React from "react";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import "./style.css";

export default function App() {
  const today = new Date();
  const date = today.getFullYear();

  // set default search params
  const [searchParams, setSearchParams] = React.useState({
    title: "",
    count: 9,
    release_date: "," + date,
  });
  const [movies, setMoviesData] = React.useState([]);

  // make initial search as well as recursive calls once the searchParams changes
  React.useEffect(
    function () {
      let urlParams = new URLSearchParams(searchParams).toString();
      fetch("https://imdb-api.com/API/AdvancedSearch/k_m7j40zj2?" + urlParams)
        .then((res) => res.json())
        .then((data) => setMoviesData(data.results));
    },
    [searchParams]
  );

  // generate a list of movies based on results
  const movieList = movies.map((item) => {
    return <Movie key={item.id} item={item} />;
  });
  return (
    <>
      <Nav searchParams={searchParams} setSearchParams={setSearchParams} />
      <div className="movies">{movieList}</div>
    </>
  );
}
