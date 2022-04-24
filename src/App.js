import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component'

import SignInPage from './pages/sign-in/sign-in-page.component';
import SignUp from './pages/sign-up/sign-up-page.component';
import Shop from './pages/shop-page/shop-page.component';
import PaymentPage from './pages/payment-page/payment-page.component';
import { fetchCollectionStart} from './redux/category/category.action'
import { checkUserSession } from './redux/user/user.action';
import { selectCategories } from './redux/category/categories.selector';
import LoadingIcon from './components/loading-icon/loading-icon.component';
import ScrollButton from './components/scroll-button/scroll-button.component';

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
    const {category} = this.props
     return (
    
    <div className="container">
      <ScrollButton></ScrollButton>  
      <Routes>
          <Route path='/' element={<Header/>}>
          <Route path='/sign-in' element={<SignInPage/>}></Route>
          <Route path='/sign-up' element={<SignUp/>}></Route>

          <Route path='/cart/payment' element={<PaymentPage/>}/>
          {category ? <Route path='/' element={<HomePage/>}/> : <Route index element = {<LoadingIcon/>}/>  }
          {category ? <Route path='shop/*' element={<Shop/>}/>: <Route index element = {<LoadingIcon/>}/>  }
        </Route> 
      </Routes>  
    </div>
  );
  }
 
}

const mapStateToProps = (state) => ({
  category: selectCategories(state)
})


const mapDispatchToProps = (dispatch) =>({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
  checkUserSession: () => dispatch(checkUserSession())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
