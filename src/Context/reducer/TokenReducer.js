

function TokenReducer(state,action){
    switch(action.type){
        case 'successLogin':
            return {...state,token:action.payload.token,username:action.payload.username}
    }
}


export default TokenReducer;