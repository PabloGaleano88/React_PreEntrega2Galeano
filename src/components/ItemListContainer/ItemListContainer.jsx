import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "../Cards/Cards"

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}`)
            .then(res => { setItems(res.data) });
    }, [])

    return (
        <>
            {<div className="cards_styles">
                {items.map((item) => {
                    return (<div key={item.id}>
                        <Card item={item} />
                    </div>
                    )
                }
                )}
            </div>}
        </>
    )
}

export default ItemListContainer