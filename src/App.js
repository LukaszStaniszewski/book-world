import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import { auth, CreateUserProfileDocument, firestore } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component'
import FantasyPage from './pages/fantasy/fantasy-page.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import SignUp from './pages/sign-up/sign-up-page.component';
import { doc, onSnapshot } from '@firebase/firestore';
class App extends React.Component {
constructor() {
  super()

  this.state = {
    currentUser: null
  }
}
unsubcribeFromAuth = null

componentDidMount() {
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
        this.setState({
          currentUser: {
            id: doc.id,
            ...doc.data()
          }
        }, ()=> {
          console.log('state', this.state)
        })
          
      })
    } else {
      this.setState({currentUser: userAuth})
    }
  })
}

componentWillUnmount() {
  this.unsubcribeFromAuth()
}
  render() {
     return (
    
    <div className="container">
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path='/fantasy' component={FantasyPage}></Route>
        <Route exact path='/' component={HomePage}></Route> 

        <Route  path='/sign-in' component={SignInPage}></Route>
        <Route path='/sign-up' component={SignUp}></Route>
        
      </Switch>  
     
    </div>
  );
  }
 
}

export default App;
