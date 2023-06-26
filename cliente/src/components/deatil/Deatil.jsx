import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import { characterDetail } from "../../redux/action";

import '../deatil/deatil.css'

const Deatil = ()=>{

    const {id}=useParams()

    //! CUANDO USAMOS REDUX
    const dispatche = useDispatch()
    
    useEffect(()=>{
        dispatche(characterDetail(id))
    },[id])

    const detail = useSelector(state=>state.characterDetail)


    
    //! SE USA DE ESTA MANERA CUANDO SE HACE EL PEDIDO DE FORMA DIRECTA DE LA API
   // const [character,setCharacter]= useState({})
    // useEffect(() => {
    //     axios(`http://localhost:3001/rickandmorty/character/${id}`)
    //     .then(({ data }) => {
    //        if (data.name) {
    //           setCharacter(data);
    //        } else {
    //           window.alert('No hay personajes con ese ID');
    //        }
    //     });
    //     return setCharacter({});
    //  }, [id]);

    return(
        <div className="contenedor-deatil"> 
        <img className="detil-imagen" src={detail.image && detail.image} alt='' />
        <div className="texto-detail">
            <h1>Nombre: "{detail.name }" </h1> 
            <h1>State: "{detail.status}" </h1> 
            <h1>Spacies: "{detail.species}" </h1> 
            <h1>Gender: "{detail.gender}" </h1> 
            <h1>Origins: "{detail.origin?.name}" </h1> 
        </div>
        
      
        </div>
    )
}

export default Deatil