import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Main from "./components/Landing/Main";
import ContactPage from './components/Contact/Contactpage';
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <div>
       
        < Link to="/"/>
       
      </div>
      <Route exact path="/" component={Main}/> 
      <Route path="/Portfolio" component={Portfolio}/>
      <Route  path="/Contact" component={ContactPage}/>

    </Router>  
);
}

export default App;
