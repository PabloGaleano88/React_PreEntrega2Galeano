import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "../../components/CardDescription/CardDescription"
import './Detailpage.css'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const [item, setItem] = useState([])
  const {id} = useParams()

  const idBuscar = parseInt(id)

  useEffect(() => {


    axios.get(`${import.meta.env.VITE_API_URL}`)
      .then(res => { setItem(res.data) })
  }, [])

  function buscarJuego(itemid) {
    return item.find(itemx => itemx.id === itemid);
  }

  const resultado = buscarJuego(idBuscar)

  console.log({resultado})

  return (
    <>
    {<div>
      {resultado ? (
        <div className='detail_page' >
          <div className='card'>
          <Card item={resultado}/>
          </div>
          <div>
            <h2>Para mas información te acercamos la pagina oficial del juego: <a href={resultado.website}>{resultado.website}</a></h2>
          </div>
        <div dangerouslySetInnerHTML={{ __html: resultado.detailed_description}} >
        </div>
        </div>
          
      ) : (
        <div>Cargando...</div>
      )}
    </div>}
</>
)
}

export default DetailPage

