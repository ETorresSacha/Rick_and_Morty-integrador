import "./card-modul.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteCharacter } from '../../redux/action';

export default function Card({id,name,status,species,gender,origin,image}) {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onClose =(id)=>{
      dispatch(deleteCharacter(id))
   }


   
   return (
      <div className="contenedor">
         <button className="boton"  onClick={()=>{onClose(id)}}>X</button>
         <img onClick={()=>navigate(`/detail/${id}`)} className="imagen" src={image} alt='' />
         <div className="texto-card">
            <h4 >Name: {name}</h4>
            <h4 >Status: {status}</h4>
            <h4 >Species: {species}</h4>
            <h4 >Gender: {gender}</h4>
            <h4 >Origin: {origin}</h4>
         </div>
       
        
        
       
      </div>
   );
}

