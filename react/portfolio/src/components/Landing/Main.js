import React from 'react';
import Nav from '/Navbar/Nav';
import Footer from '/Footer/Footer';


class Main extends React.Component {

  render() {
    return (
           
      <Nav/>
        <div class="container">
          <div class="row">
            <div class="col-md-8" id="content">
              <div class="page-header">
                <h1>About</h1><br/>
              </div>
              <div class="row">
                <div class="col-md-5">
                   <img src="images/Profile.jpg" alt="Profile Picture" class="img-thumbnail"/>
                </div>
                  <div class="col-md-6">
                     <div class="caption">
                       <p class = "about">
                        Full-stack web developer using my experience in team leadership with robotic technologies to build a better experience for end users.
                        Previous work involved being constantly challenged with ways to make are companies remotely operated vehicles perform tasks the customer needed. 
                        Recently earned a certificate in full-stack web development from the University of Texas Austin, Strong passion for problem solving and turning 
                        new ideas into realities. Currently looking forward to using what I have learned to dive into new and engaging problems and ideas to build better 
                        experiences on the web and to always be enhancing or creating something new  
                       </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      <Footer/>      
      
            
        )
    }
}
export default Main;