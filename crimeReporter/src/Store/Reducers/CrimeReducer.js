import AuthAction from "../Actions/AuthAction"

const initialState = {
    dataSend: false,
    getCrimeDetail : false,
    Data : [] 
}

function CrimeReducer(state = initialState, action) {
    switch (action.type) {

        case AuthAction.dataSend:
            return Object.assign({}, state, {dataSend : true})

            case AuthAction.getCrimeData:
            return Object.assign({},state , {getCrimeDetail : true , Data : action.data })
           

            default  :
            return state
            

    }
}
export default CrimeReducer