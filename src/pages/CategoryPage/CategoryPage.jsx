import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "../../components/Cards/Cards"

import { useParams } from 'react-router-dom'

const CategoryPage = () => {

    const [items, setItems] = useState([])


    let {categoryId} = useParams()

    // Esto es para pasar el string false y true a booleano
    const booleanValue = JSON.parse(categoryId);

    let filteredProducts = items.filter((items) => {
        return items.is_free === booleanValue
    })


    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}`)
            .then(res => { setItems(res.data) });
    }, [categoryId])

    return (
        <>
            {<div className="cards_styles">
                {filteredProducts.map((filteredProducts) => {
                    return (<div key={filteredProducts.id}>
                        <Card item={filteredProducts} />
                    </div>
                    )
                }
                )}
            </div>}
        </>
    )
}

export default CategoryPage


