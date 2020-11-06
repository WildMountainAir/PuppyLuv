import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Puppy = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div>
       {
        !clicked ?
        <div className="puppy-root">
          <div className="puppy-location">{props.puppy_location}</div>
          <Row>
            <div className="puppy-name">{props.puppy_name}</div>
          </Row>
          <img onClick={handleClick}  className="puppy-card-img" src={props.puppy_img} alt="puppy"></img>
          <div className="puppy-gender">{props.puppy_gender}</div>
          {/* <div className="puppy-breeds">{props.puppy_breeds}</div>
          <div className="puppy-size">Full Grown Size: {props.puppy_size}</div> */}
        </div>
        :
        <div className="puppy-root">
          <div className="puppy-location">{props.puppy_location}</div>
          <Row>
            <div className="puppy-name">{props.puppy_name}</div>
          </Row>
          <img onClick={handleClick} className="puppy-card-img" src={props.puppy_img} alt="puppy"></img>
          <div className="puppy-gender">{props.puppy_gender}</div>
          <div className="puppy-breeds">{props.puppy_breeds}</div>
          <div className="puppy-size">{props.puppy_size}</div>
          <p className="puppy-info">{props.puppy_info !== null ? props.puppy_info : "Woof! I am a puppy. Arf! My description is coming soon!"}</p>
          <Row className="puppy-icon-row">
              {
                props.puppy_size === "Small" ? <img className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/smallB.png" alt="small space friendly"/> : <img  className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/mountainB.png" alt="mountain space friendly"/>
              }
              {
                props.puppy_child === true ? <img className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/childB.png" alt="child friendly"/> : ""
              }
              {
                props.puppy_cats === true ? <img className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/catB.png" alt="cat friendly"/> : ""
              }
              {
                props.puppy_dogs === true ? <img className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/dogB.png" alt="dog friendly"/> : ""
              }
              {
                props.puppy_fixed === true ? <img className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/fixB.png" alt="dog friendly"/> : ""
              }
              {
                props.puppy_shots === true ? <img className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/shotB.png" alt="dog friendly"/> : ""
              }
              {
                props.puppy_trained === true ? <img className="puppy-icons" src="https://puppyluv.s3.us-east-2.amazonaws.com/trainB.png" alt="dog friendly"/> : ""
              }
          </Row>
          <Button className="puppy-adopt puppy-link" href={props.puppy_url}>
            Adopt Me
          </Button>
        </div>
      } 
    </div>
  );
};

export default Puppy;
