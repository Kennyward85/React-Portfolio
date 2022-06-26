import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from "./components/Landing/Main";
import ContactPage from './components/Contact/Contactpage';
import Portfolio from "./components/Portfolio/Portfolio";
import Certifications from './components/Certifications/Certifications';
function App() {
  return (
    <HashRouter basename= "/">
     
      <Route exact path="/" component={Main}/> 
      <Route path="/Portfolio" component={Portfolio}/>
      <Route  path="/Contact" component={ContactPage}/>
      <Route path="/Certifications" component={Certifications}/>

    </HashRouter>  
);
}

export default App;
