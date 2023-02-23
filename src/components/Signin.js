import React, { useState } from 'react'
import css from './style/Signin.module.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner';

function Signin(props) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const notify = () => { toast("Welcome " + name) };


    const handleClick = () => {
        props.setStatus(true);
        notify();
        setTimeout(() => {
            navigate('/')
        }, 5000);
    }

    const handleChange = (e) => {
        let text1 = e.target.value;
        setName(text1);
    }

    return (
        <div className={css.signin}>
            <div className={css.container}>
                <div className={css.heading}>
                    <h1>{props.status ? 'Login' : 'Sign Up'}</h1>
                </div>
                <form className={css.form}>
                    <input type="text" placeholder='Email adress' required />
                    <input type="text" placeholder='Name' required onChange={handleChange} />
                    <input type="text" placeholder='Mobile Number' required />
                    <input type="password" placeholder='Password' required />
                    <input type="password" placeholder='Confirm Password' required />
                    <button type='submit' onClick={handleClick}>Submit</button>
                    <ToastContainer />
                </form>
            </div>
            <h1 className={css.logo}>© Movie Deekho</h1>
        </div>
    )
}

export default Signin