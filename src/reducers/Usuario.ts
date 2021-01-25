const initialState = {
    name: 'Luccas'
}

export const  Usuario = (state = initialState ,action:any) =>{
    switch(action.type){
        case 'SET_NAME':

        return {...state, name:action.payload.name}

        break;
    }


    return state
}