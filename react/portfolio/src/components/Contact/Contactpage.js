import React from 'react';
import Header from '../NavBar/Nav';
import Footer from '../Footer/Footer';

const ContactPage = () => {

    return(
        <div>
            <Header/>
        <div className="container">
        <div className="row">
          <div className="col-md-8" id="content">
            <div className="page-header">
              <h1>Contact</h1>
            </div>

            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Name"/>
                </div><br/>
                <div className="form-group col-md-12">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                </div><br/>
                <div className="form-group col-md-12">
                  <label for="exampleInputEmail1">Message</label>
                  <textarea className="form-control" rows="5"></textarea>
                </div><br/>
              </div>
              <div style={{textAlign:"center"}}>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
<br/><br/>
          </div>
              <div className="col-md-4" id="panel">
                <div className="panel panel-default">
                  <div className="panel-heading" style={{textAlign: "center"}}>
                    <h3 className="panel-title">Contact Me</h3>
                  </div>
                  <div className="panel-body" style={{ textAlign:"center"}}>
                    <a href="https://github.com/kennyward85" target="_blank">
                      <img src="../images/github.png" className="social" alt="GitHub"
                        style={{width: "50px", height:"50px"}}/>
                    </a>
                    <br/><br/><br/>
                    <a href="https://www.linkedin.com/in/kenneth-wardlow-950ba11a8/" target="_blank">
                      <img src="../images/linkedin.png" className="social" alt="LinkedIn"
                        style={{width: "50px", height:"50px"}}/>
                    </a>
                    <br/><br/><br/>
                    <a href="file:///C:/Users/Kenneth/Desktop/Resume..pdf" download = "Kenneth Wardlow Resume" target="_blank">
                      <img src="../images/Resume.png" className="social" alt="Resume"
                        style={{width: "50px", height:"50px"}}/><p>Resume</p>
                        </a>
                        <br/><br/>
                        <h6>E-mail:</h6>
                        <a href = "mailto: Kenneth@wardlowservices.com" target = "_blank">
                        <h6> kenneth@wardlowservices.com</h6>
                        </a>
                        <h6>Phone:</h6>
                        <h6>979-292-4562</h6>
                    
                    <br/><br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        
    )
}
export default ContactPage;