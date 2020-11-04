import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PuppyList from '../src/components/PuppyList';

function App() {

  return (
    <Container fluid>
      <Row className="sticky">
        <img
          className="header-logo"
          src="https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_LogoLong_M+(1).png"
          alt="logo"
        />
      </Row>
      <Row>
        <div className="jumbotron-root">
          <h1 className="jumbotron-header">Woof! Bork! Arf!</h1>
          <p className="jumbotron-text">
            Find your next fur baby with PuppyLuv! All of our adoptable dogs are puppies, meaning they are under 1 year of age. When you adopt, you save a loving puppy making them part of your family and open up shelter-space for another animal who needs it. <img className="icon-logo" src="https://puppyluv.s3.us-east-2.amazonaws.com/1.png"/> <img className="icon-logo" src="https://puppyluv.s3.us-east-2.amazonaws.com/3.png"/>
          </p>
        </div>
      </Row>
      <Row>
        <PuppyList />
      </Row>

    </Container>
  );
}

export default App;
