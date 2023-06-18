import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'
import Filter from '../FilterBar/FilterBar'


const NavBar = () => {





    return (
        <div className='division_top'>
            <nav>
                <ul>
                    <div className='links'>
                        <Filter />
                        <Link className='li' to="/Contact">Contacto</Link>
                        <Link className='li' to="/About">Sobre Nosotros</Link>
                    </div>
                    <div className='notification_bar'>
                        <li><SearchOutlinedIcon /></li>
                        <li><NotificationsNoneOutlinedIcon /></li>
                        <li><CartWidget /></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar