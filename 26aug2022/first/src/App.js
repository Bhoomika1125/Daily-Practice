/*import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
//import Header1 from "./component/Header3";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div className="container">
    //   <Header1 title='React Tutorial'/>
    //   <Header1 title1='React Tutorial 111'/>
    // </div>

    <div className='container'>
      <Header/>
      

      
  {/* <Header1 title = {'Komal'}/> } */
//  </div>
//   );
// }

// export default App;



import React, {Component} from  'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Form from './components/Form.js';


function App() {
  return (
    <Router>
   <div>
<Route exact path="/" component = {Home} />
<Route exact path="/About" component = {About} />
<Route exact path="/Form" component = {Form} />

   </div>
   </Router>
  );
}

export default App;
