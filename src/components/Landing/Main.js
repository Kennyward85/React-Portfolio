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
                  <h1 style={{ fontFamily: "monospace"}}>About</h1><br/>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://www.wardlowservices.com/Image/Profile.jpg" alt="Profile" className="img-thumbnail"/>
                  </div>
                    <div className="col-md-6">
                      <div className="caption">
                        <p className = "about">
                          Full-stack web developer using my experience in team leadership with robotic technologies to build a better experience for end users.
                          Previous work involved being constantly challenged with ways to make are companies remotely operated vehicles perform tasks the customer needed. 
                          Recently earned a certificate in full-stack web development from the University of Texas Austin, Strong passion for problem solving and turning 
                          new ideas into realities. Currently looking forward to using what I have learned to dive into new and engaging problems and ideas to build better 
                          experiences on the web and to always be enhancing or creating something new.  
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