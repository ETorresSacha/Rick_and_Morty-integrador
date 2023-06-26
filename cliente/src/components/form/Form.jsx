import '../form/form.css'
import { useState,useEffect } from 'react'

const Form=({login})=>{

        //const [email,setEmail] = useState('')
        //const [password,setPassword] = useState('')  --> esto es para setear el email y el password, pero se puede hacer cuando useState tiene un valor de objeto

        const[userData,setuserData] = useState({
            email:'',
            password:''
        }
        )

    const onChange = (event)=>{
        //setuserData(event.target.value)
        const name = event.target.name // en esta variable se esta guardando el nombre de quien se esta lanzando el evento
        const value = event.target.value // en esta variable se esta guardando el valor que se recibe en el input

        setuserData({
            ...userData,[name]:value  // aqui se setea esos valores como objeto " se guarda de esta manera con la finalidad de no chantar los valores"
        })
    }

    // vamos a validar que un correo se escriba de manera correcta, en otras palabras vamos a validar errores
    const [errores,setErrores] = useState('')

    const validacion = ()=>{
        if (/\S+@\S+\.\S+/.test(userData.email)){
            setErrores('')
        }
        else{
            setErrores(<h4 style={{fontWeight:'bold',fontSize: '12px',lineHeight: '0.1em',color:'red'}}>Email incorrecto</h4>) // tambien se puede colocar style de esta manera, tenerlo en cuenta
        }
    }

    useEffect(()=>{
        validacion()
    },[userData])


    // Para validar el loagin
    const handlerSubmit = (event)=>{ 
        event.preventDefault()
        login(userData)

    }
    return(
        <div className="form-contenedor"> 
            <form onSubmit={handlerSubmit}>
                <h1>Bienvenido</h1>
                <img className="imagen-form" src='https://cdn.shopify.com/s/files/1/0042/7563/4222/collections/R_M_collab_logo.jpg?v=1623834383' alt='' />
                <br></br>
                <label htmlFor="Email"> Email: </label>
                <input className='input-form' type="text" name='email' placeholder="Email" value={userData.email} onChange={onChange} /> {errores!=='' ? <>{errores}</> :''}
                <br></br>
                <label htmlFor="Password"> Password: </label>
                <input className='input-form' type="text" name='password' placeholder="Password" value={userData.password} onChange={onChange} /> 
                <br></br>
                <button className='boton-enviar' type="Submit">Enviar</button>
            </form>
            
        </div>
    )
}
export default Form