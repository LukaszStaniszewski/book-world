import { all, call } from "redux-saga/effects";

import { categoriesSagas } from "./category/category.sagas";
import userSagas from "./user/user.sagas";

export default function* rootSaga() {
    yield all([
        call(categoriesSagas),
        call(userSagas),
    ])
}