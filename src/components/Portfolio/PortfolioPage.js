import React from 'react';
import Card from 'react-bootstrap/card';
import CardColumns from 'react-bootstrap/card';
// import Portfolio from './Portfolio'

 let PortfolioPage = ({portf}) => {
  const {name, img, github, deployed} = portf
  return (
    <CardColumns>
    <Card>
      <a href={deployed} target="_blank">
      <Card.Img className="Imgs" variant="top" src={img} />
      </a><Card.Body>
        <Card.Title>{name}</Card.Title>
        <a href={github} target="_blank">
        <Card.Text>
         Github
        </Card.Text>
      </a>
      </Card.Body>
    </Card>
    </CardColumns>
  );
}

export default PortfolioPage;