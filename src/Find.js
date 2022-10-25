import React, { useEffect, useState } from "react";
import "./Find.css";
import Nav from "./Nav";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios'

function Find() {
  const [searchTerm, setSearchTerm] = useState(null)
  const [movies, setMovies] = useState([])

  function isSearchTerm() {
    if (searchTerm === null) {
      return ("https://www.omdbapi.com/?i=tt3896198&apikey=2a96fd51&s=fast")
    }
      return (`https://www.omdbapi.com/?i=tt3896198&apikey=2a96fd51&s=${searchTerm}`)
  }

  async function getMovies() {
    const { data } = await axios(isSearchTerm())
    console.log(data)
  }

  useEffect(() => {
    getMovies()
  }, [])
  
  // setSearchTerm('spongebob')

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
          <input type="text" placeholder="search..." className="find__search--input" />
          <button className="find__search--btn">
            <SearchIcon className="searchIcon" />
          </button>
        </div>
      </div>
      <div className="movies__info">
        <div className="search__info">
          <h2>Search Results for: </h2>
        </div>
        <div className="page__change">

        </div>
      </div>
      <div className="movies">
        
        <div className="movie">
          <figure className="movie__img--container">
            <img src={"poster"} alt="" />
          </figure>
          <div className="movie__title">
            {"title"}
          </div>
          <div className="movie__type">
            {"type"}
          </div>
          <div className="movie__year">
            {"year"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Find;
