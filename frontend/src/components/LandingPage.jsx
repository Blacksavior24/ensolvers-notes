import React from "react";
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css';

const LandingPage = () =>{
    return (
        <div className={style.landing}>
            <div className={style.cont}>
                <h1 className={style.h1}>Welcome ^-^</h1>
                <p className={style.parra}>Ensolvers Emerson </p>
                <Link to='/home'>
                    
                        <button className={style.boton}>
                            <span className={style.span}>Let's Go!</span>
                        </button>
                    
                </Link>
                <h2 className={style.h2}>Application designed by:</h2>
                <a href="https://www.linkedin.com/in/emerson-edward-villalta-quispe-1b09a01aa/" className={style.a  } > 
                 Emerson Villalta</a>
            </div>
        </div>
    )
}

export default LandingPage