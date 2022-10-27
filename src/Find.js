import React, { useEffect, useState } from "react";
import "./Find.css";
import Nav from "./Nav";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useParams } from "react-router-dom";

function Find() {
  const { homeSearchTerm } = useParams();
  console.log(homeSearchTerm);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [displayTerm, setDisplayTerm] = useState("");

  function onSearch() {
    if (!searchTerm) {
      console.log('no search term')
      return
    }
    getMovies();
    setDisplayTerm(searchTerm);
  }

  async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=2a96fd51&s=${searchTerm || homeSearchTerm}`
    );
    setMovies(data.Search);
  }

  useEffect(() => {
    if (homeSearchTerm === "searchPage") {
      return;
    }
    setDisplayTerm(homeSearchTerm)
    getMovies();
  }, [homeSearchTerm]);

  return (
    <div className="find">
      <div className="background__overlay">
        <Nav
          logo__classname="find__logo"
          span__color__classname="find__color"
          movie__logo__text__classname="find__movie__logo--text"
          logo__text__classname="find__logo--text"
          nav__link__classname="find__nav--link"
          nav__link__primary__classname="find__nav__link--primary"
        />
        <h2 className="find__sub-title">Browse our Movies</h2>
        <div className="find__search--wrapper">
          <input
            onChange={(event) => setSearchTerm(event.target.value)}
            type="text"
            placeholder="search..."
            className="find__search--input"
            onKeyPress={(event) => event.key === "Enter" && onSearch()}
          />
          <button className="find__search--btn" onClick={() => onSearch()}>
            <SearchIcon className="searchIcon" />
          </button>
        </div>
      </div>
      <div className="search__results">
        <div className="search__info">
          <h2>
            Search Results for:{" "}
            {displayTerm && <span className="purple">"{displayTerm}"</span>}
          </h2>
        </div>
        <div className="page__change"></div>
      </div>
      <div className="movies">
        {movies.slice(0, 6).map((movie) => (
          <div className="movie" key={movie.imdbID}>
            <figure className="movie__img--container">
              <img className="movie__img" src={movie.Poster} alt="" />
            </figure>
            <div className="movie__details">
              <div className="movie__title purple">{movie.Title}</div>
              <div className="movie__year">{movie.Year}</div>
              <div className="movie__type">{movie.Type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Find;