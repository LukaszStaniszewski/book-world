import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component'
import FantasyPage from './pages/fantasy-page/fantasy-page.component';
class App extends React.Component {
 

  render() {
     return (
    
    <div className="container">
      <Header ></Header>
      <Switch>
        <Route path='/fantasy' component={FantasyPage}></Route>
        <Route path='/' component={HomePage}></Route> 
      </Switch>  
     
    </div>
  );
  }
 
}

export default App;
