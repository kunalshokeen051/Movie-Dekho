import React, {useState} from 'react'
import css from './style/Home.module.css'
import Header from './Header'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom';
import Slickslider from './Slickslider';
import { motion } from 'framer-motion'

function Home() {
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const trending = () => {
    navigate('/movieList');
  }

  return (
    <div className={css.Home} onLoad={() => {setLoading(false)}}>
      <div className={Loading?`${css.active} ${css.Spinner_module}`:`${css.Spinner_module}`}>
        <Spinner />
      </div>
      <Header />
      <div className={css.container}>
        <motion.div className={css.left}
          animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }}
          transition={{ type: 'tween', ease: 'backInOut', duration: 1, delay: .5 }}>
          <Slickslider />
        </motion.div>
        <motion.div className={css.right}

          animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 10 }}
          transition={{ type: 'tween', ease: 'backInOut', duration: 1 }}
        >
          <h1>Movies TV shows, You Name it <span> we Have it! </span></h1>
          <h3>See Ratings, Reviews and more..</h3>
          <button onClick={trending} >Let's Start</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Home 