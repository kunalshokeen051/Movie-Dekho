import React, { useState, useEffect } from 'react'
import css from './style/Movies.module.css'
import MovieBox from './MovieBox';


function Movies() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const API_KEY = process.env.REACT_APP_APIKEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}}`

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovie(data.results)
      })
  }, [])

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${search}`
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    }
    catch (e){ }
  }

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className={css.Movies}>
      <div className={css.movies_header}>
        <div className={css.left}>
          <h1>Movie Deekho</h1>
        </div>
          <form action="" onSubmit={searchMovie} className={css.right}>
            <input type="search" name='query' value={search} placeholder='Search Here..' onChange={changeHandler} />
            <button type='submit' className='search_button'>Search</button>
          </form>
      </div>
      <div className={css.grid_container}>
        {movie.map((movieReq) =>
          <MovieBox key={movieReq.id} {...movieReq} />)}
      </div>
    </div>
  )
}

export default Movies