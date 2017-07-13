import AuthAction from "../Actions/AuthAction"

const initialState = {
    login: false,
    register: false,
    isLoading: false,
    adminLogin : false


}

function Reducer(state = initialState, action) {
    switch (action.type) {

        case AuthAction.login:
            return Object.assign({}, state, { login: true, isLoading: true })

        case AuthAction.register:
            return Object.assign({}, state, { register: true, isLoading: true })

            case AuthAction.openAdminPanel:
            return Object.assign({}, state , {adminLogin : true})


        default:
            return state

    }
}
export default Reducer