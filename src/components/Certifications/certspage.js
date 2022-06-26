import React from 'react';
import Card from 'react-bootstrap/card';
import CardColumns from 'react-bootstrap/card';
// import Portfolio from './Portfolio'

 let Certifications = ({cert}) => {
  const {name, img, samplework,} = cert
  return (
    <CardColumns>
    <Card>
      <a className= "atag" href={samplework} target="_blank">
      <Card.Img className="Imgs" variant="top" src={img} />
      </a><Card.Body>
        <Card.Title>{name}</Card.Title>
        <a className= "atag" href={samplework} target="_blank">
        <Card.Text>
         Sample Work
        </Card.Text>
      </a>
      </Card.Body>
    </Card>
    </CardColumns>
  );
}

export default Certifications;