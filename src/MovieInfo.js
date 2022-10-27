import React from 'react'
import { useParams } from 'react-router-dom'

function MovieInfo() {
    const params = useParams()
    console.log(params)
  return (
    <div>MovieInfo</div>
  )
}

export default MovieInfo