import  CategoryActionTypes  from "./category.types";

const INITIAL_STATE = {
    categories: null,
    isFetching: false,
    errorMessage: undefined,
}
const categoryReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CategoryActionTypes.FETCH_CATEGORIES_START:
            return{
                ...state,
                isFetching: true,
            };
        case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
            return{
                ...state,
                categories: action.payload,
                isFetching: false,
            };
        case CategoryActionTypes.FETCH_CATEGORIES_FAILURE: 
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false,
            }
        default:
           
            return state
    }
}

export default categoryReducer;