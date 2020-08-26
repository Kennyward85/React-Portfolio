import React from "react";
import PortfolioPage from "./PortfolioPage";
import { Row, Col } from 'react-bootstrap';
import Header from '../NavBar/Nav';
import Footer from '../Footer/Footer'; 

let Portfolio = () => {
  const [info] = React.useState([
      {
        name: "Project Barmaid",
        github: "https://github.com/Kennyward85/Project1-",
        deployed: "https://kennyward85.github.io/Project1-/",
        img:"https://user-images.githubusercontent.com/66036794/91117952-81a67580-e655-11ea-8e9c-ffdcb720bb6f.png",
    }, 
    {
        name: "Project Scope",
        github: "https://github.com/mmeleen/scope",
        deployed: "https://scope-g1.herokuapp.com/",
        img: "https://user-images.githubusercontent.com/66036794/91195715-df22dc80-e6be-11ea-8d0c-7473783c22d1.png",
    }, 
    {
        name: "Progressive Budget",
        github: "https://github.com/Kennyward85/Progressive-Budget",
        deployed: "https://boiling-brushlands-16665.herokuapp.com/",
        img: 'https://user-images.githubusercontent.com/66036794/91195837-fe216e80-e6be-11ea-849d-0b99ba3f0807.png',
    }, 
    {
        name: "Fitness Tracker",
        github: "https://github.com/Kennyward85/Fitness-Tracker",
        deployed: "https://morning-forest-63597.herokuapp.com/",
        img: 'https://user-images.githubusercontent.com/66036794/89610424-116bb780-d840-11ea-98e4-544e1a525d56.png',
    }, 
    {
        name: "Weather Forecaster",
        github: "https://github.com/Kennyward85/Weather-Dashboard",
        deployed: "https://kennyward85.github.io/Weather-Dashboard/",
        img: 'https://user-images.githubusercontent.com/66036794/91195987-388b0b80-e6bf-11ea-9d36-0cd38322b922.png',
    }, 
    {
        name: "Day Planner",
        github: "https://github.com/Kennyward85/Day-Planner",
        deployed: "https://kennyward85.github.io/Day-Planner/.",
        img: 'https://user-images.githubusercontent.com/66036794/91198377-1a72da80-e6c2-11ea-970a-79045eaf94a4.png',
    }, 
    {
      name: "Team Generator",
      github: "https://github.com/Kennyward85/Company-Team-Generator",
      deployed: "https://kennyward85.github.io/Company-Team-Generator/.",
      img: 'https://user-images.githubusercontent.com/66036794/91196492-d1ba2200-e6bf-11ea-84ac-817f35d09a6d.png',
  },
  {
    name: "React User Directory",
    github: "https://github.com/Kennyward85/Directory-React/tree/master",
    deployed: "https://kennyward85.github.io/Directory-React/",
    img: 'https://user-images.githubusercontent.com/66036794/91197274-bd2a5980-e6c0-11ea-8c03-be2f6f30c0d9.png',
  },
  {
    name: "Note Taker",
    github: "https://github.com/Kennyward85/Note-Taker",
    deployed: "https://calm-everglades-59570.herokuapp.com/",
    img: 'https://user-images.githubusercontent.com/66036794/91200598-f82e8c00-e6c4-11ea-9973-755ae5793f6c.png',
  }
])
    return (
        <div>
          <Header/>
            <h1 className="thisH1">Portfolio</h1>
            <Row>
                {info.map((portf, i)=> (
                    <Col lg={4}>
                        <PortfolioPage key={i} portf={portf}/>
                    </Col>
                ))}
            </Row>
            <Footer/>
        </div>
    )
}
export default Portfolio;
