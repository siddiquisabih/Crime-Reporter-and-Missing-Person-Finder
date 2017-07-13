import AuthAction from "../Actions/AuthAction"

const initialState = {
    peopleMissingRequest: false,
    Data: [],
    getMissPersonData: false
}

function PeopleReducer(state = initialState, action) {
    switch (action.type) {

        case AuthAction.missingData:
            return Object.assign({}, state, { peopleMissingRequest: true })

        case AuthAction.getMissingData:
            return Object.assign({}, state, { getMissPersonData: true, Data: action.data })
        
        default:
            return state


    }
}
export default PeopleReducer