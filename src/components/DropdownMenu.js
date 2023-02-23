import React from 'react'
import css from './style/DropdownMenu.module.css'

function DropdownMenu() {
  return (
    <div className={css.DropdownMenu} >
   <p>हिंदी</p>
   <p>中国人(chinese)</p>
   <p>日本(Japenese)</p>
   <p>Italiana</p>
   <p>Español</p>
    </div>
  )
}

export default DropdownMenu