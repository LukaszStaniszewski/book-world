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
import itemDetailsPage from './pages/itemdetails/item-details-page.component';
import Footer from './components/footer/footer.component';
import { selectCurrentUser } from './redux/user/user.selector'
import {setCurrentUser} from './redux/user/user.action'
import {updateCategories} from './redux/category/category.action'
import LoadingIcon from './components/loading-icon/loading-icon.component';

const HomePageLoadingIcon = LoadingIcon(HomePage)
const PaymetPageLoadingIcon = LoadingIcon(PaymentPage)

class App extends React.Component {
  state ={
    loading: true,
  }

unsubcribeFromAuth = null
unsubcribeFromSnapShot = null

componentDidMount() {
  const {setCurrentUser} = this.props;
  const {updateCategories} = this.props;

  /*************** Creating user profile, saving it in Firestore, then fetching user data to app ******************/
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

  /**************  Fetching shop data from Firestore    *****************/

  getDocs(collection(firestore, "categories")).then((snapshot) => {
   
      const categoriesMap = converCollectionsSnapshotToMap(snapshot);
      console.log('categoriesMap:',categoriesMap)
      updateCategories(categoriesMap);
      this.setState({loading: false});
  }).catch((error) => {
    console.log('getCategoriesError:', error)
  });

  
}

componentWillUnmount() {
  this.unsubcribeFromAuth()
}
  render() {
    const {loading} = this.state
    
     return (
    
    <div className="container">
     <Header></Header>
      <Switch>
        <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}></Route>
        <Route exact path='/sign-up' component={SignUp}></Route>
        <Route path='/details/:linkUrl' component={itemDetailsPage}/>
        <Route path='/cart/payment' render={(props) => <PaymetPageLoadingIcon isLoading={loading} {...props}></PaymetPageLoadingIcon>}></Route>
        <Route path='/' render={(props) => <HomePageLoadingIcon isLoading={loading} {...props}></HomePageLoadingIcon>}></Route>   
      </Switch>  
     <Footer></Footer>
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
