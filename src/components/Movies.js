import React, { useState, useEffect } from 'react'
import css from './style/Movies.module.css'
import MovieBox from "./MovieBox";
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        AOS.init();
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
    if (page !== 1) {
      page = page - 1;
    }
    else {
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
      <motion.div className={css.movies_header}>
        <div className={css.left} >
          <h1>Movie Deekho</h1>
        </div>
        {/* <button style={{ height: '100px' }} className={css.btn_back} type='text' onClick={goBack}>Go Back</button> */}
        <form action="" onSubmit={searchMovie} className={css.right}>
          <input type="search" name='query' value={search} placeholder='Search Here..' onChange={changeHandler} />
          <button type='submit' className='search_button'>Search</button>
        </form>
      </motion.div>
      <div className={css.banner}>
        <h1 data-aos="fade-left" data-aos-duration='1000'> LET THE FUN BEGIN</h1>
        <div className={css.players} data-aos="fade-up" data-aos-duration='1000' >
          <ReactPlayer
            url='https://streamable.com/x4wi5s'
            playing='true'
            volume={0}
            loop='true'
            muted='true'
            width={'100%'}
            height={'400px'}
            playsinline='true'
          />

          <ReactPlayer
            url='https://streamable.com/kw5dqk'
            playing='true'
            volume={0}
            loop='true'
            muted='true'
            width={'100%'}
            height={'400px'}
            playsinline='true'
          />

          <ReactPlayer
            url='https://streamable.com/h5ona4'
            playing='true'
            volume={0}
            loop='true'
            muted='true'
            width={'100%'}
            height={'400px'}
            playsinline='true'
          />
        </div>
      </div>
      <div  className={css.movies_body}>
        <h1>Now Trending ...</h1>
        <div className={css.navigationBar}>
          <h1 style={{ color: 'white', fontSize: '1rem' }}>{'Page ' + page}</h1>
          <div>
            <button onClick={navPageBackward} value='+' >{'<'}</button>
            <button onClick={navPageForward} value='-'>{'>'}</button>
          </div>
        </div>
        <motion.div className={css.grid_container}>
          {movie.map((movieReq) =>
            <MovieBox key={movieReq.id} {...movieReq}/>)}
        </motion.div>
      </div>

      <div className={css.navigationBar}>
        <h1 style={{ color: 'white', fontSize: '1rem' }}>{'Page ' + page}</h1>
        <div>
          <button onClick={navPageBackward} value='+' >{'<'}</button>
          <button onClick={navPageForward} value='-'>{'>'}</button>
        </div>
      </div>
    </motion.div>

  )
}

export default Movies