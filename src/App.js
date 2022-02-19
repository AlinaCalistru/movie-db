import React from "react";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import "./style.css";

export default function App() {
  const today = new Date();
  const date = today.getFullYear();

  const [searchParams, setSearchParams] = React.useState({
    title: "",
    count: 9,
    release_date: "," + date,
  });
  const [movies, setMoviesData] = React.useState([]);

  React.useEffect(
    function () {
      console.log("Effect ran");
      console.log(searchParams);

      let urlParams = new URLSearchParams(searchParams).toString();
      fetch("https://imdb-api.com/API/AdvancedSearch/k_m7j40zj2?" + urlParams)
        .then((res) => res.json())
        .then((data) => setMoviesData(data.results));
    },
    [searchParams]
  ); 

  const movieList = movies.map((item) => {
    return <Movie key={item.id} item={item} />;
  });
  return (
    <>
      {/*logo, search bar, filtering results by genre and type, GO,clear filters   */}

      <Nav searchParams={searchParams} setSearchParams={setSearchParams} />
      {/* list of cards with their data that were retrieved with API */}
      <div className="movies">{movieList}</div>
    </>
  );
}
