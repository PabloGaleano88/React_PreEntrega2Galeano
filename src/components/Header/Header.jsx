import React from 'react'
import "./Header.css"
import banner from "../../assets/images/checkpoint_games.png"

import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <p className='welcome_message'>Bienvenido/a a nuestra tienda online!!!🛒</p>
            <div className='header_container'>
                <div className='banner'>
                    <Link to='/'>
                    <img src={banner}  alt="CheckPoint Games" /> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header