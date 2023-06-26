import '../search/search-module.css'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {addCharacter} from "../../redux/action"

const SearchBar=()=> {
   const [id,setid] = useState('')

   const handleChange =(event)=>{
      setid(event.target.value)
   }

   const dispatche = useDispatch()

   const onSearch =(id)=>{
      dispatche(addCharacter(id))

   }


   return (
      <div className="buscar">
         <div>
            <button className='About'>
               <Link to='/About'>About</Link>
            </button>
            <button className='Home'>
               <Link to='/Home'>Home</Link>
            </button>
         </div>

         <input className="buscarInput" onChange={handleChange} value={id} type='search' />
         <button className="buscarClick" onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar