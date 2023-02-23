


function dashboardReducer(state,action){
    switch(action.type){
        case'getDataBuku': 
        return {...state,dataBuku:action.payload}
        case'isLoading': 
        return {...state,isLoading:action.payload}
    }
}

export default dashboardReducer;