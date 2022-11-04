import { useEffect, useState } from "react"
import {listarCategorias} from '../api'


export function Categorias(){
    const[categorias,setCategorias] = useState([])

    useEffect(()=>{
        const getData = async()=>{
        setCategorias(await listarCategorias())

        }
        getData()

    },[])
    return (
        <div>
      <h1>Categorias</h1>
      {categorias.map((categoria)=> <p>{categoria.name}</p>)}
      </div>
    )
}