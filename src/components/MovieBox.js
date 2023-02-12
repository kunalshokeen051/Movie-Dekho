import React, { useState } from 'react'
import css from './style/MovieBox.module.css'
import { Modal} from 'react-bootstrap';


const API_IMG = "https://image.tmdb.org/t/p/w500"

function MovieBox({title, poster_path, vote_average, release_date, overview}) {
const [show, setShow] = useState(false);

const handleShow = () => {setShow(true)};
const handleClose = () => {setShow(false)};


  return (

    <div className={css.MovieBox}>
      <h2>{title}</h2>
      <img src={API_IMG + poster_path} alt="" />
      <button className={css.btn} onClick={handleShow}>Know More</button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={API_IMG + poster_path} alt="" style={{width:'14rem', margin:"1rem 0", padding:'.5rem',border:'2px solid grey'}} />
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
    </div>
  )
}

export default MovieBox
