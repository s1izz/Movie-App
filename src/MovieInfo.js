import "./MovieInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from '@mui/icons-material/StarBorder';

function MovieInfo() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [rating, setRating] = useState(5);

  async function getMovieInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=79976878`
    );
    console.log(data);
    setMovieInfo(data);
    getRating(data);
  }

  function getRating(data) {
    setRating(data.imdbRating / 2);
  }

  useEffect(() => {
    getMovieInfo();
  }, []);

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  return (
    <div className="movieInfo">
      <Nav
        logo__classname="logo"
        span__color__classname="purple"
        movie__logo__text__classname="movie__logo--text"
        logo__text__classname="logo__text"
        nav__link__classname="nav__link"
        nav__link__primary__classname="nav__link--primary"
      />
      <div className="info__container">
        <div className="movieInfo__img--container">
          <img className="movieInfo__img" src={movieInfo.Poster} alt="" />
        </div>
        <div className="movieInfo__container">
          <h1 className="movieInfo__title">{movieInfo.Title}</h1>
          <div className="movieInfo__rating">
            {/* {new Array(Math.floor(rating)).fill(0).map((_, index) => (
              <StarIcon key={index} />
            ))}
            {!Number.isInteger(rating) && <StarHalfIcon />} */}
            {new Array(Math.floor(rating)).fill(<StarBorderIcon />).map((_, index) => (
              <StarIcon />
            ))}
          </div>
          <div className="movieInfo__points">
            <div className="movieInfo__point">Year: {movieInfo.Year}</div>
            <div className="movieInfo__point">Rated: {movieInfo.Rated}</div>
            <div className="movieInfo__point">Type: {movieInfo.Type}</div>
            <div className="movieInfo__point">Genre: {movieInfo.Genre}</div>
            <div className="test">
              {<StarBorderIcon /> || <StarIcon />}
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={console.log(rating)}>rating</button> */}
    </div>
  );
}

export default MovieInfo;
