import  UserActionTypes  from "./user.types"

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: undefined
}


const userReducer =(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default userReducer