import React, { useState, useEffect } from 'react'
import css from './style/Movies.module.css'
import MovieBox from "./MovieBox";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function Movies() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=90e0806b4f289662f8fe2e21824c4ace`

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
      const url = `https://api.themoviedb.org/3/search/movie?api_key=90e0806b4f289662f8fe2e21824c4ace&query=${search}`
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  const goBack = () => {
    navigate('/');
  }

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <motion.div className={css.Movies} animate={{ opacity: 1 }}
      initial={{ opacity: 0 }} transition={{ duration: .5 }}>
      <motion.div className={css.movies_header}
        animate={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ delay: .5, duration: .5 }}
      >
        <div className={css.left}>
          <h1>Movie <span> Deekho</span></h1>
        </div>
        <button className={css.btn_back} type='text' onClick={goBack}>Go Back</button>
        <form action="" onSubmit={searchMovie} className={css.right}>
          <input type="search" name='query' value={search} placeholder='Search Here..' onChange={changeHandler} />
          <button type='submit' className='search_button'>Search</button>
        </form>
      </motion.div>
      <motion.div className={css.grid_container}>
        {movie.map((movieReq) =>
          <MovieBox key={movieReq.id} {...movieReq} />)}
      </motion.div>
    </motion.div>
  )
}

export default Movies