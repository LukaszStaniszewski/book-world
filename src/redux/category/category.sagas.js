import {call, all, put, takeLatest} from "redux-saga/effects"
import { collection, doc, onSnapshot, getDocs, query} from '@firebase/firestore';
import { firestore, converCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import CategoryActionTypes from "./category.types"
import { fetchCollectionSuccess, fetchCollectionFailure } from "./category.action"

function* fetchCollectionsAsync() {

    try {
        const collectionRef = yield collection(firestore, "categories")
        const snapshot = yield getDocs(collectionRef) 
        const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionFailure(error))
    }
}

function* fetchCollectionsStart() {
    yield takeLatest(CategoryActionTypes.FETCH_CATEGORIES_START, fetchCollectionsAsync)
}

export function* categoriesSagas() {
    yield all([call(fetchCollectionsStart)])
}