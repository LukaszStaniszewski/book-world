import  CategoryActionTypes  from "./category.types"

export const fetchCollectionStart = () => ({
    type: CategoryActionTypes.FETCH_CATEGORIES_START
})

export const fetchCollectionSuccess = categoriesMap => ({
    type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesMap
})

export const fetchCollectionFailure = error => ({
    type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: error
})