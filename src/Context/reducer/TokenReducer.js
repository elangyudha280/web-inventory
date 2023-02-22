

function TokenReducer(state,action){
    switch(action.type){
        case 'successLogin':
            return {...state,token:action.payload}
    }
}


export default TokenReducer;