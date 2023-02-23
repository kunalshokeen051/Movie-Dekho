import React, { useState, useEffect } from 'react'
import css from './style/Movies.module.css'
import MovieBox from "./MovieBox";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

let page = 1;

function Movies() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const API_KEY = process.env.React_App_APIKEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  console.log(API_KEY);


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setMovie(data.results)
      })
  }, [API_URL])

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  const navPageForward = async (e) => {
      page = page + 1;
      const url = API_URL + '&page=' + page;
      console.log(url)
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    }

  const navPageBackward = async (e) => {
    if(page != 1){
      page = page - 1;
    }
    else{
      page = 1;
    }
      const url = API_URL + '&page=' + page;
      console.log(url)
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
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
        animate={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ delay: .5, duration: .5 }}  >
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
        <div className={css.navigationBar}>
        <h1 style={{color:'white',fontSize:'1rem'}}>{'Page' + " " + page}</h1>
        <div>
          <button onClick={navPageBackward} value='+' >{'<'}</button>
          <button onClick={navPageForward} value='-'>{'>'}</button>
        </div>
        </div>
    </motion.div>
  )
}

export default Movies