import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component'

import SignInPage from './pages/sign-in/sign-in-page.component';
import SignUp from './pages/sign-up/sign-up-page.component';
import PaymentPage from './pages/payment-page/payment-page.component';
import itemDetailsPage from './pages/itemdetails/item-details-page.component';
import Footer from './components/footer/footer.component';
import { fetchCollectionStart} from './redux/category/category.action'
import { checkUserSession } from './redux/user/user.action';
import LoadingIcon from './components/loading-icon/loading-icon.component';
import ScrollButton from './components/scroll-button/scroll-button.component';
const HomePageLoadingIcon = LoadingIcon(HomePage)
const PaymetPageLoadingIcon = LoadingIcon(PaymentPage)

class App extends React.Component {

unsubcribeFromAuth = null

componentDidMount() {
  const {fetchCollectionStart} = this.props
  const {checkUserSession} = this.props
  fetchCollectionStart()
  checkUserSession()
}

componentWillUnmount() {
  this.unsubcribeFromAuth()
}


  render() {
    const {isFetching} = this.props
     return (
    
    <div className="container">
     <Header></Header>
     <ScrollButton></ScrollButton>
      <Switch>
        <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}></Route>
        <Route exact path='/sign-up' component={SignUp}></Route>
        <Route path='/details/:linkUrl' component={itemDetailsPage}/>
        <Route path='/cart/payment' render={(props) => <PaymetPageLoadingIcon isLoading={isFetching} {...props}></PaymetPageLoadingIcon>}></Route>
        <Route path='/' render={(props) => <HomePageLoadingIcon isLoading={isFetching} {...props}></HomePageLoadingIcon>}></Route>   
      </Switch>  
     <Footer></Footer>
    </div>
  );
  }
 
}

const mapStateToProps = (state) => ({
  isFetching: state.category.isFetching
})


const mapDispatchToProps = (dispatch) =>({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
  checkUserSession: () => dispatch(checkUserSession())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
