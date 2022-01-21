import { takeLatest, put, all, call} from "redux-saga/effects";
import { signInWithPopup } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import {googleProvider, auth, CreateUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";

import UserActionTypes from "./user.types";
import {signInFailure, signInSuccess, signUpFailure, signOutFailure, signOutSuccess, authenticationSuccess} from "./user.action";

function * userRef(user, additionalData, history) {
    console.log("history:", history)
    try{        
        const userRef = yield call(CreateUserProfileDocument, user, additionalData) 
        const userSnapshot = yield getDoc(userRef)
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))   
        if(!history) return
        yield history.history.push("/")
    } catch(error) {
        yield put(signInFailure(error))
    }
}

function* signInAfterSignUp ({payload: {user, additionalData, history}}) {
    yield userRef(user, additionalData, history)

}

function* emailSignIn({payload: {email, password, history}}) {
    try{
        const {user} = yield signInWithEmailAndPassword(auth, email, password)
        yield put(authenticationSuccess( {user, history:{history}}))
        
    }catch(error){
        yield put(signInFailure(error))
        alert("sprawdź czy wpisałeś prawidłowe dane")
    }
}

function* googleSignIn({payload: {history}}) {
    try {
        const {user} = yield signInWithPopup(auth, googleProvider)
        yield put(authenticationSuccess( {user, history:{history}}))

    }catch(error){
        yield put(signInFailure(error)) 
    }
}

function* signUp({payload: {displayName, email, password, history}}) {
    try{
        const { user } = yield createUserWithEmailAndPassword(auth, email, password)
        yield put(authenticationSuccess( {user, additionalData:{displayName}, history:{history}}))    
    }catch(error){
        yield put(signUpFailure(error))
    }
}

function* signOut() {
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error))
    }
}

function* isUserAuthenticated() {
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        yield userRef(userAuth)
    } catch(error) {
        yield put(signInFailure(error))
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

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onAuthenticationSuccess() {
    yield takeLatest(UserActionTypes.AUTHENTICATION_SUCCESS, signInAfterSignUp)
}
export default function* userSagas() {
    yield all([call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onSignUpStart),
            call(onSignOutStart), 
            call(onCheckUserSession),
            call(onAuthenticationSuccess)  
        ])
} 