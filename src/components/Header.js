import React, { useState } from 'react'
import css from './style/Header.module.css'
import {TbLanguage } from 'react-icons/tb'
import { motion } from 'framer-motion'
import DropdownMenu from './DropdownMenu'
import { useNavigate } from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'

function Header(props) {
const navigate = useNavigate();
const [showMenu, setShowMenu] = useState(false);
let status = props.isSignin;

  return (
    <motion.div className={css.Header}
      animate={{ y: 0 }} initial={{ y: -100 }}
      transition={{ type: 'tween', ease: 'linear', duration: .5 }} >
      <h1>Movie <span>Dekho</span></h1>
      <div className={css.Navbar}>
        <div className={css.lang}>
          <button onClick={() => {setShowMenu(!showMenu)}}>
            <TbLanguage /> English </button>
            <div  className={showMenu ?`${css.menu} ${css.active}`:`${css.menu}`}>
          <DropdownMenu />
            </div>
        </div>
        <button  onClick={() =>{navigate('./Signin')}}>{status?<FaUserAlt/>:'Sign Up'}</button>
      </div>
    </motion.div>
  )
}

export default Header