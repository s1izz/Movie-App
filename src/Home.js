import React from "react";
import "./Home.css";
import Nav from "./Nav";
import SearchIcon from '@mui/icons-material/Search';
import watchMovieImg from './assets/undraw_movie_img.svg'

function Home() {
  return (
    <div className="home">
      <Nav 
      logo__classname="logo"
      span__color__classname="purple"
      movie__logo__text__classname="movie__logo--text"
      logo__text__classname="logo__text"
      nav__link__classname="nav__link"
      nav__link__primary__classname="nav__link--primary"
      />
      <div className="home__description">
        <h1 className="home__title">
          <span className="purple">
            America's widest movie selection platform
          </span>
        </h1>
        <h2 className="home__sub-title">Search for a movie</h2>
      </div>
      <div className="home__search--wrapper">
        <input className="home__search--input" placeholder="search..." type="text" />
        <button className="home__search--btn"><SearchIcon className="searchIcon" /></button>
      </div>
      <figure className="home__img--wrapper">
        <img className="home__img" src={watchMovieImg} alt="" />
      </figure>
    </div>
  );
}

export default Home;
