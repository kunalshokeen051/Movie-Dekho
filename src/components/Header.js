import React from 'react'
import css from './style/Header.module.css'
import {IoMdGitMerge} from 'react-icons/io'
import {motion} from 'framer-motion'

function Header() {
  return (
    <motion.div className={css.Header}
    animate={{y:0}} initial={{y:-100}} 
    transition={{type:'tween',ease:'linear', duration:.5}} >
      <h1>Movie <span>Dekho</span></h1>
      <div className={css.Navbar}>
        <button className={css.lang} ><IoMdGitMerge /> English </button>
        <button>Sign Up</button>
      </div>
    </motion.div>
  )
}

export default Header