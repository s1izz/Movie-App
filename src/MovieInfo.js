import './MovieInfo.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import StarIcon from '@mui/icons-material/Star';

function MovieInfo() {
    const { id } = useParams()
    const [movieInfo, setMovieInfo] = useState([])
    const [rating, setRating] = useState()

    async function getMovieInfo() {
      const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=79976878`).then(getRating())
      // console.log(data)
      setMovieInfo(data)
      getRating()
    }

    function getRating() {
      if (movieInfo.imdbRating > 5) {
        setRating(movieInfo.imdbRating / 2)
        console.log(rating)
        return
      }
      setRating(movieInfo.imdbRating)
    }

    useEffect(() => {
      getMovieInfo()
    }, [])

  return (
    <div className='movieInfo'>
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
          <img className='movieInfo__img' src={movieInfo.Poster} alt="" />
        </div>
        <div className="movieInfo__container">
          <h1 className="movieInfo__title">{movieInfo.Title}</h1>
          <div className="movieInfo__rating">
            {/* {new Array(Math.floor(rating)).fill(0)} */}
          </div>
          {/* <button onClick={console.log(rating)}>rating</button> */}
        </div>
      </div>
    </div>
  )
}

export default MovieInfo