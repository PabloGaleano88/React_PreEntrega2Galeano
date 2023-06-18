import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './CartWidget.css'

const CardWidget = () => {
    return (
        <div className='cart_container'>
            <ShoppingCartOutlinedIcon/>
            <p className='number'>3</p>
        </div>
    )
}

export default CardWidget