import React, { useState } from 'react'
import css from './style/MovieBox.module.css'
import { Modal } from 'react-bootstrap';
import { motion } from 'framer-motion'


const API_IMG = "https://image.tmdb.org/t/p/w500"

function MovieBox({ title, poster_path, vote_average, release_date, overview }) {
  const [show, setShow] = useState(false);

  const handleShow = () => { setShow(true) };
  const handleClose = () => { setShow(false) };

  return (
    <motion.div className={css.MovieBox}
      whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }}
      viewport={{ once: true }} transition={{ delay: .3, duration: .8 }} >
      <img src={API_IMG + poster_path} alt="" loading='lazy' onClick={handleShow} />
      <h2>{title}</h2>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={API_IMG + poster_path} alt="" loading='lazy'
            style={{
              width: '14rem', margin: "1rem 0",
              padding: '.5rem', border: '2px solid grey'
            }} />
          <h3>{title}</h3>
          <h4>Imbd: <span>{vote_average}</span></h4>
          <h5>Release Date:{release_date}</h5>
          <br /><br />
          <h6>Overview</h6>
          <p>{overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <button varaint="secondary" onClick={handleClose} >Close</button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  )
}

export default MovieBox
