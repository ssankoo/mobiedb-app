import React, { useEffect, useState } from 'react'

function Movie() {

    const [moveList, setMovieList] = useState([])

    const getMovie = () =>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=37d56f5ef915b9f00809c1fa33a462fb")
        .then(res => res.json())
        .then(json => setMovieList(json.results))

    }

    useEffect(()=>{
        getMovie()
    }, [])

    console.log(moveList)

  return (
    <div>
        {moveList.map((movie)=>(
            <img style={{width:"20%", marginLeft:"10px", marginTop:"10px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        ))}

    </div>
  )
}

export default Movie