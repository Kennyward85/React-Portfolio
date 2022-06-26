import React from "react";
import Certifications from "./certspage";
import { Row, Col } from 'react-bootstrap';
import Header from '../NavBar/Nav';
import Footer from '../Footer/Footer'; 

let Certifications = () => {
  const [info] = React.useState([
      {
    name: "NAME HERE",
    samplework: "https:// samplework.com/Kennyward85/Project1-",
    
    img:"https://user-images. sampleworkusercontent.com/66036794/91117952-81a67580-e655-11ea-8e9c-ffdcb720bb6f.png",
    }, 
    {
    name: "NAME HERE",
    samplework: "https:// samplework.com/mmeleen/scope",
    
    img: "https://user-images. sampleworkusercontent.com/66036794/91195715-df22dc80-e6be-11ea-8d0c-7473783c22d1.png",
    }, 
    {
    name: "NAME HERE",
    samplework: "https:// samplework.com/Kennyward85/Progressive-Budget",
    
    img: 'https://user-images. sampleworkusercontent.com/66036794/91195837-fe216e80-e6be-11ea-849d-0b99ba3f0807.png',
    }, 
    {
    name: "NAME HERE",
     samplework: "https:// samplework.com/Kennyward85/Fitness-Tracker",
    
    img: 'https://user-images. sampleworkusercontent.com/66036794/89610424-116bb780-d840-11ea-98e4-544e1a525d56.png',
    }, 
    {
    name: "NAME HERE",
    samplework: "https:// samplework.com/Kennyward85/Weather-Dashboard",
    
    img: 'https://user-images. sampleworkusercontent.com/66036794/91195987-388b0b80-e6bf-11ea-9d36-0cd38322b922.png',
    }, 
    {
     name: "NAME HERE",
    samplework: "https:// samplework.com/Kennyward85/Day-Planner",
    
    img: 'https://user-images. sampleworkusercontent.com/66036794/91198377-1a72da80-e6c2-11ea-970a-79045eaf94a4.png',
    }, 
    {
      name: "NAME HERE",
      samplework: "https:// samplework.com/Kennyward85/Company-Team-Generator",
    
      img: 'https://user-images. sampleworkusercontent.com/66036794/91196492-d1ba2200-e6bf-11ea-84ac-817f35d09a6d.png',
  },
  {
    name: "NAME HERE",
    samplework: "https:// samplework.com/Kennyward85/Directory-React/tree/master",
    deployed: "https://kennyward85. samplework.io/Directory-React/",
    img: 'https://user-images. sampleworkusercontent.com/66036794/91197274-bd2a5980-e6c0-11ea-8c03-be2f6f30c0d9.png',
  },
  {
    name: "NAME HEREr",
    samplework: "https:// samplework.com/Kennyward85/Note-Taker",
   
    img: 'https://user-images. sampleworkusercontent.com/66036794/91200598-f82e8c00-e6c4-11ea-9973-755ae5793f6c.png',
  }
])
    return (
        <div>
          <Header/>
            <h1 className="thisH1">Certifications</h1>
            <Row>
                {info.map((portf, i)=> (
                    <Col lg={4}>
                        <PortfolioPage key={i} cert={cert}/>
                    </Col>
                ))}
            </Row>
            <Footer/>
        </div>
    )
}
export default Certifications;
