import React from 'react'
import css from './style/Home.module.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

function Home () {
  const navigate = useNavigate();

  const trending = () => {
    navigate('/movieList');
  }

  return (
    <div className={css.Home}>
      <Header />
      <div className={css.inner_container}>
        <h1>movies TV shows, You Name it <span> we Have it! </span></h1>
        <h3>See Ratings, Reviews and more..</h3>
       <button onClick={trending} >Let's Start</button>
      </div>
    </div>
  )
}

export default Home 