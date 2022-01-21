import { takeLatest, put, all, call, take } from "redux-saga/effects";
import { signInWithPopup } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import {googleProvider, auth, CreateUserProfileDocument} from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";

import UserActionTypes from "./user.types";
import {signInFailure, signInSuccess, signUpFailure} from "./user.action";

function * userRef(user, additionalData) {
    
    try{        
        const userRef = yield call(CreateUserProfileDocument, user, additionalData) 
        const userSnapshot = yield getDoc(userRef)
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))   
    } catch(error) {
        yield put(signInFailure(error))
    }
}

function* emailSignIn({payload: {email, password}}) {
    try{
        const {user} = yield signInWithEmailAndPassword(auth, email, password)
        yield userRef(user)
    }catch(error){
        yield put(signInFailure(error))
        alert("sprawdź czy wpisałeś prawidłowe dane")
    }
}

function* googleSignIn() {
    try {
        const {user} = yield signInWithPopup(auth, googleProvider)
        yield userRef(user)    
    }catch(error){
        yield put(signInFailure(error)) 
    }
}

function* signUp({payload: {displayName, email, password, history}}) {
    try{
        const { user } = yield createUserWithEmailAndPassword(auth, email, password)
        yield userRef(user, {displayName})
        yield history.push("/")
       
    }catch(error){
        yield put(signUpFailure(error))
    }
}

function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}

function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}


export default function* userSagas() {
    yield all([call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onSignUpStart),     
        ])
}