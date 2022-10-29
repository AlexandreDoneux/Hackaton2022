import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



import Button from 'react-bootstrap/Button';
import NavBar from './components/navBar';




function App() {
  return (
    <div>
      
      <NavBar/>
      <Button>Hello</Button>
    </div>
    
  );
}

export default App;
