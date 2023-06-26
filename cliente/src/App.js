import './App.css';
import Cards from './components/cards/Cards.jsx';
//import Navbar from './components/navBar/Navbar';
import SearchBar from './components/search/SearchBar';
import { useState,useEffect } from 'react';

import { Routes, Route,useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Deatil from './components/deatil/Deatil';
import Form from './components/form/Form';

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };


const emailErik = ''
const passwordErik = ''

function App() {

   const location = useLocation() // esto es para indicar en donde quieres que se renderice 
   const navigate = useNavigate() // para  direccionar a cierta ventana
   
   // const [characters, setCharacters]=useState([]) // Esto es para crear un estado con un componente funcional, el primero es el
   // // "estado" el segundo es la "funcion seteadora del estado" y el ultimo es el "estado inicial"

   const [access,setAccess] = useState(false) // se usa para validar el loagin
   
//--------------------------------------------------------------------------------------------------------------------
   // const onSearch = (id)=>{
   //    setCharacters([...characters,example]) //esta es la funcion a la que se manda a llamar el "SearchBar"
   // }
//--------------------------------------------------------------------------------------------------------------------


   //! FUNCION ONSEARCH --> SE USA CUANDO SE MANDA LA FUNCION POR PROPS
   // function onSearch(id) {
   //    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   //! PARA ELIMINAR--> SE MANDA POR PROPS
   // const onClose=(id)=>{
   //    setCharacters(characters.filter(element=> {return element.id !== Number(id)} ))
   // }
  
   //para validar usuario -- el UserData se esta accediendo del componente Form,liego se pasa como parametr en Form para que se ejecute
   const login = (UserData)=>{
      if (UserData.email === emailErik && UserData.password === passwordErik){
         setAccess(true)
         navigate('/home')
      }
   }
   useEffect(()=>{
      !access && navigate('/') // mientras el acceso esta en false te mantiene en la misma página
   },[access])




   return (
      <div className='App'>
         {location.pathname !=='/' && <div className='search'><SearchBar  /></div>}  

      <Routes>
         <Route  path='/' element={<Form login={login}/>}></Route>
         <Route path='/home' element={<Cards />}></Route>
         <Route path='/detail/:id' element={<Deatil/>}></Route>
         <Route path='/about' element={<About/>}></Route>
      </Routes>
      </div>  
      
   );
}
export default App;

// 1° Cuando se ejecuta la App, no existe ningun dato para mostrar, cuando hacemos click hacemos el llamado a la funcion onSearch
// es ahi donde se añade los datos del objeto "example" y como hora ya existe un dato entra como propiedad al componente Cards
// y puede ejecutarse con normalidad.
