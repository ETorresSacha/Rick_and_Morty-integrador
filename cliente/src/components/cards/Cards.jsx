import Card from '../card/Card';
import '../cards/cards-module.css'
import { useSelector } from "react-redux";

export default function Cards() {
   
   const characters = useSelector((state)=>state.character)
   return (
      <div className='conteiner-cards'>
         {
         characters.map(({id,name,status,species,gender,origin,image})=>{
         return(
         <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
         />
         )
      }
      )
      }
      </div>
   )
   
}
         

         
         