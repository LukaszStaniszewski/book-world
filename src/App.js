import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/header/header.component';

class App extends React.Component {
 
  
  render() {
     return (
    
    <div className="container">
      
      <Routes>
        <Route path='/' element={<Header />}></Route> 
      </Routes>  
     
    </div>
  );
  }
 
}

export default App;
