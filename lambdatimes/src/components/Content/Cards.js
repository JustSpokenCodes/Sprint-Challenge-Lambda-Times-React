import React, { Component } from 'react';
import Card from './Card';
import cardData from "../../data"
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map (card => {
        return (
          <Card key = {card.id}
            firstThing ={card}
            tab={card.tab}
            headline={card.headline}
            img={card.img}
            author={card.author}
            />
        )
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.string
};

// Make sure you include prop types for all of your incoming props

export default Cards;