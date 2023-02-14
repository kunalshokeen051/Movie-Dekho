import React from 'react'
import css from './style/Spinner.module.css'

function Spinner() {
    return (
        <div className={css.spinner_container}>
            <div className={css.loading_spinner}></div>
                <h1>Please Wait Page is Loading...</h1>
        </div>
    )
}

export default Spinner