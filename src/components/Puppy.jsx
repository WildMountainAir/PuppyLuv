import React from 'react';
const Puppy = (props) => {
  return (
    <div className="puppy-root">
        <div className="puppy-location">{props.puppy_location}</div>
        <div className="puppy-name">{props.puppy_name}</div>
        <a href={props.puppy_url}><img className="puppy-card-img" src={props.puppy_img} alt="puppy"></img></a>
        <div className="puppy-gender">{props.puppy_gender}</div>
        <div className="puppy-breeds">{props.puppy_breeds}</div>
        <div className="puppy-size">{props.puppy_size}</div>
    </div>
  );
};

export default Puppy;
