import { GET_CHARACTER,ADD_CHARACTER,DELETE_CHARACTER,CHARACTER_DETAIL} from "./action-type"

const initialState={
    character:[],
    characterDetail:{}
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case GET_CHARACTER:
            return {...state,
                    character:action.payload}

        case ADD_CHARACTER:
            return {...state,
                    character:[...state.character,action.payload]}

        case DELETE_CHARACTER:
            const character_eliminado = state.character.filter(ele=>ele.id !== action.payload)
            return {...state,
            character:character_eliminado}

        case CHARACTER_DETAIL:
            return {...state,
            characterDetail:action.payload}

        default: 
            return {...state}
    }
}
export default reducer