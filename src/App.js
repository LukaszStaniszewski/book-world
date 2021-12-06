import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, CreateUserProfileDocument, firestore, converCollectionsSnapshotToMap } from './firebase/firebase.utils';
import { collection, doc, onSnapshot, getDocs } from '@firebase/firestore';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component'

import SignInPage from './pages/sign-in/sign-in-page.component';
import SignUp from './pages/sign-up/sign-up-page.component';
import PaymentPage from './pages/payment-page/payment-page.component';
import { selectCurrentUser } from './redux/user/user.selector'
import {setCurrentUser} from './redux/user/user.action'
import {updateCategories} from './redux/category/category.action'

class App extends React.Component {

unsubcribeFromAuth = null
unsubcribeFromSnapShot = null

componentDidMount() {
  const {setCurrentUser} = this.props;
  const {updateCategories} = this.props;
  this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
    if(userAuth) {
    
      await CreateUserProfileDocument(userAuth);
      onSnapshot(doc(firestore, 'users', userAuth.uid), doc => {
        setCurrentUser({
          
            id: doc.id,
            ...doc.data()   
        });
        
          
      });
    } else {
      setCurrentUser(userAuth)
    }
  })

  // const collectionRef = onSnapshot(doc(firestore, 'categories'), snapshot => {
  //   console.log('collectionSnapShot:', snapshot)
  // })

  // const collectionRef = getDocs(collection(firestore, 'categories'));
  // collectionRef.onSnapshot(async snapshot => {
  //   console.log('collectionrefShot:',snapshot)
  // })
//   const querySnapshot =  getDocs(collection(firestore, "categories"));
//   querySnapshot.forEach( (doc) => {
//     console.log("Current data: ", doc);
// });


  // firestore.collection('categories').get().then((snapshot) => {
  //   console.log(snapshot.docs)
  // })

  // onSnapshot(collection(firestore,'categories'), async snapshot => {
  //   console.log(snapshot.docs)
  // });
  
 


  getDocs(collection(firestore, "categories")).then((snapshot) => {
    
      
      const categoriesMap = converCollectionsSnapshotToMap(snapshot);
      console.log('categoriesMap:',categoriesMap)
      
      updateCategories(categoriesMap);
  }).catch((error) => {
    console.log('getCategoriesError:', error)
  });

  
}

componentWillUnmount() {
  this.unsubcribeFromAuth()
}
  render() {
     return (
    
    <div className="container">
     <Header></Header>
      <Switch>
        <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}></Route>
        <Route exact path='/sign-up' component={SignUp}></Route>
        <Route path='/cart/payment' component={PaymentPage}></Route>
        <Route path='/' component={HomePage}></Route> 

       
        
      </Switch>  
     
    </div>
  );
  }
 
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})


const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateCategories: categoriesMap => dispatch(updateCategories(categoriesMap)),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
