import React, { useState, useEffect} from 'react'
import css from './style/Movies.module.css'
import MovieBox from "./MovieBox";
import {motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy'
import Spinner from './Spinner'
import AOS from 'aos';
import 'aos/dist/aos.css';

let page = 1;

function Movies() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(false);
  const [load, setLoad] = useState(false);
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
    setSearched(true);
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
    setSearched(false);
    page = page + 1;
    const url = API_URL + '&page=' + page;
    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data.results);
  }
  
  const navPageBackward = async (e) => {
    setSearched(false);
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

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <motion.div className={css.Movies} onLoad={() =>{setLoad(true)}} 
    animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}>
          <div style={load?{display:'none'}:{display:"block"}} >
        <Spinner />
      </div>
      <motion.div className={searched?`${css.movies_header} ${css.hidden}`:`${css.movies_header}`}>
        <div className={css.left} >
          <h1>Movie Deekho</h1>
        </div>
        <form action="" onSubmit={searchMovie} className={css.right}>
          <input type="search" name='query' value={search} placeholder='Search Here..' onChange={changeHandler} />
          <button type='submit' className='search_button'>Search</button>
        </form>
      </motion.div>
      <div className={searched?`${css.banner} ${css.hidden}`:`${css.banner}`} >
        <h1 data-aos="fade-left" data-aos-duration='1000'> LET THE FUN BEGIN</h1>
        <div className={css.players} data-aos="fade-up" data-aos-duration='1000' >
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ga0iTWXCGa0'
            playing='true'
            volume={0}
            loop='true'
            muted='true'
            width={'100%'}
            height={'400px'}
            playsinline='true'
          />

          <ReactPlayer
            url='https://www.youtube.com/watch?v=cq2iTHoLrt0'
            playing='true'
            volume={0}
            loop='true'
            muted='true'
            width={'100%'}
            height={'400px'}
            playsinline='true'
          />

          <ReactPlayer
            url='https://www.youtube.com/watch?v=_InqQJRqGW4'
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
        <h1>{searched?`Search result for ${search.toLocaleUpperCase()}`:'Now Trending'}</h1>
        <div className={css.navigationBar}>
          <h1 style={{ color: 'white', fontSize: '1rem' }}>{'Page ' + page}</h1>
          <button className={searched === false?css.hidden:''}
           onClick={() =>{return (setSearched(false), setSearch(''), window.location.reload(false) )}} >
            Trending Now.
            </button>
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