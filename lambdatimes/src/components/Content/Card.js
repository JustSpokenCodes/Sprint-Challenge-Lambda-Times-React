import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.firstThing.headline}
      </div>
      <div className="author">
        {props.firstThing.tab}
        <div className="img-container">
          <img src={props.firstThing.img} />
        </div>
        <span>By {props.firstThing.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
