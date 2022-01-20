import { all, call } from "redux-saga/effects";

import { categoriesSagas } from "./category/category.sagas";

export default function* rootSaga() {
    yield all([
        call(categoriesSagas)
    ])
}