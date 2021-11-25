import React from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { auth, CreateUserProfileDocument, firestore } from './firebase/firebase.utils';
import { doc, onSnapshot } from '@firebase/firestore';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component'
import FantasyPage from './pages/fantasy/fantasy-page.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import SignUp from './pages/sign-up/sign-up-page.component';
import { selectCurrentUser } from './redux/user/user.selector'
import {setCurrentUser} from './redux/user/user.action'
class App extends React.Component {

unsubcribeFromAuth = null

componentDidMount() {
  const {setCurrentUser} = this.props
  this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
    if(userAuth) {
      // const userRef = await CreateUserProfileDocument(userAuth);
      // userRef.onSnapshot(snapshot => {
      //   this.setState({ currentUser: {
      //     id: snapshot.id,
      //     ...snapshot.data()
      //   }}, () => {
      //     console.log('state', this.state)
      //   })
      // })

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
}

componentWillUnmount() {
  this.unsubcribeFromAuth()
}
  render() {
     return (
    
    <div className="container">
      <Header></Header>
      <Switch>
        <Route exact path='/fantasy' component={FantasyPage}></Route>
        <Route exact path='/' component={HomePage}></Route> 

        <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}></Route>
        <Route path='/sign-up' component={SignUp}></Route>
        
      </Switch>  
     
    </div>
  );
  }
 
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})


const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
