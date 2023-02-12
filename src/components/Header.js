import React from 'react'
import css from './style/Header.module.css'
import {IoMdGitMerge} from 'react-icons/io'

function Header() {
  return (
    <div className={css.Header}>
      <h1>Movie <span>Dekho</span></h1>
      <div className={css.Navbar}>
        <button><IoMdGitMerge /> English </button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Header