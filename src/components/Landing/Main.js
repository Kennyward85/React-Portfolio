import React from 'react';
import Header from '../NavBar/Nav';
import Footer from '../Footer/Footer';
import "../../App.css";
const Main = () => {
  
    return (
      <div>    
        <Header/>
          <div className="container">
            <div className="row">
              <div className="col-md-8" id="content">
                <div className="page-header">
                  <h1 style={{ fontFamily: "monospace"}}>Roberson Air</h1><br/>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://www.wardlowservices.com/Image/Profile.jpg" alt="Profile" className="img-thumbnail"/>
                  </div>
                    <div className="col-md-6">
                      <div className="caption">
                        <p className = "about">
                          This is where the information about your company as far as family owned and operated since a certain time and just an overview more or less 
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer/>      
      </div>
            
      )
    }

export default Main;