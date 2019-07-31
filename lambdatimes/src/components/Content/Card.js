import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const CardStyle = styled.div `
  border: 2px solid blue;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;`



const HeadlineStyle = styled.div `
font-size: 25px;
font-family: Didot, serif`

const ImgStyle  = styled.div
    `  padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
          
        img {
        width: 40px;
        }`

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
