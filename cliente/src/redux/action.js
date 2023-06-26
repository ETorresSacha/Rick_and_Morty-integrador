import {GET_CHARACTER, ADD_CHARACTER, DELETE_CHARACTER, CHARACTER_DETAIL,ADDFAV,REMOVEFAV } from '../redux/action-type'

export const getCharacter = ()=>{
    return function(dispatch){
        fetch('https://rickandmortyapi.com/api/character')
        .then(response=>response.json())
        .then(data => dispatch({type:GET_CHARACTER, payload:data.results}))
    }
}

export const addCharacter = (id)=>{
    return function(dispatch){
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(response=>response.json())
            .then(data => {  
                if(data.name){
                    dispatch({type:ADD_CHARACTER, payload:data})}

                else{window.alert("no hay personaje con ese id")} //! para evitar los errores en el cuando no se encuentra un ID, una opcion es codificar de esta manera
            })
    }
}

export const deleteCharacter = (id)=>{
    return {type: DELETE_CHARACTER, payload:id}
}

export const characterDetail = (id)=>{
    return function(dispatch){
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response=>response.json())
        .then(data => dispatch({type:CHARACTER_DETAIL, payload:data}))
    }
}



