import {call, all, put, takeLatest} from "redux-saga/effects"
import { collection, doc, onSnapshot, getDocs, query} from '@firebase/firestore';
import { firestore, converCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import CategoryActionTypes from "./category.types"
import { fetchCollectionSuccess, fetchCollectionFailure } from "./category.action"

export function* fetchCollectionsAsync() {
    yield console.log("I am fired")
    try {
        const collectionRef = yield collection(firestore, "categories")
        yield console.log('collectionRef:', collectionRef)
        const snapshot = yield getDocs(collectionRef)
        yield console.log('snapshot:', snapshot)    
        const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshot)
        yield console.log("collectionsMap:",  collectionsMap)
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionFailure(error))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(CategoryActionTypes.FETCH_CATEGORIES_START, fetchCollectionsAsync)
}

export function* categoriesSagas() {
    yield all([call(fetchCollectionsAsync)])
}