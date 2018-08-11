import React from 'react';

function View(props) {
  const { address, image, location } = props;

  return (
    <div className="location">
      <img src={image} alt={location}/>
      <h5>{location}</h5>
      <p className="caption">{address}</p>
    </div>
  )
}

export default View;