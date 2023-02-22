


function LoginReducer(state,action){
    switch (action.type) {
        case 'showModalSuccess':
            return {...state,modalCheck:true}
        case 'hiddenModalSuccess':
            return {...state,modalCheck:false}
        default:
            break;
    }
}


export default LoginReducer;