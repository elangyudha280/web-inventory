

function TokenReducer(state,action){
    switch(action.type){
        case 'successLogin':
            return {...state,token:action.payload.token,username:action.payload.username};
            case 'successLogout':
                return {...state,token:action.payload.token,username:action.payload.username};
        default:
            throw new Error('token wrong')
    }
}


export default TokenReducer;