import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PuppyList from '../src/components/PuppyList';
import Button from 'react-bootstrap/Button';

function App() {
  const [logged, setLogged] = useState(false);
  const [surprise, setSurprise] = useState(false);

  const handleClick = () => {
    setLogged(!logged);
  }
  const boom = () => {
    setSurprise(!surprise);
  }
  return (
    <Container fluid>
    {
      logged === false ?
      <div>
        <img src="https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_Logo_L.png" className="welcome-logo" alt="logo"/>
        <Button onClick={handleClick} className="welcome-root puppy-adopt puppy-link">
          Show Me Puppies!
        </Button>
      </div>
      :
      <div>
      <Row className="sticky">
        <img
          className="header-logo"
          src="https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_LogoLong_M+(3).png"
          alt="logo"
        />
      </Row>
      <Row>
        <div className="jumbotron-root">
          <h1 className="jumbotron-header">Woof! Bork! Arf!</h1>
          <p className="jumbotron-text">
            Find your next fur baby with PuppyLuv! All of our adoptable dogs are puppies, meaning they are under 1 year of age. When you adopt, you save a loving puppy making them part of your family and open up shelter-space for another animal who needs it.
          </p>
          <b>Click on a Pup to learn more:</b>
          <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/mountainB.png" alt="mountain"/> Suitable for Mountain Living
            <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/smallB.png" alt="apartment"/> Suitable for Small Spaces
            <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/catB.png" alt="cat"/> Cat Friendly
            <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/dogB.png" alt="dog"/> Dog Friendly
            <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/childB.png" alt="child"/> Child Friendly
            <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/shotB.png" alt="shot"/> Up to Date on Shots
            <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/fixB.png" alt="paw in heart"/> Spayed / Neutered
            <br />
            <img className="puppy-icons-info" src="https://puppyluv.s3.us-east-2.amazonaws.com/trainB.png" alt="house"/> House Trained
        </div>
      </Row>
      <Row>
        {
          surprise !== true ?
          <PuppyList />
          :
          <img src="https://media.giphy.com/media/9ryPZZxUAK5QRY4gLr/giphy.gif" className="welcome-logo" alt="logo"/>
        }
      </Row>
      <Row>
        <img
          onClick={boom}
          className="header-logo"
          src="https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_LogoLong_L.png"
          alt="logo"
        />
      </Row>
      </div>
    }
    </Container>
  );
}

export default App;
