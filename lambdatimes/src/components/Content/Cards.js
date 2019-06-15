import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map (card => {
        return (
          <Card key = {card.id}ß
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

// Make sure you include prop types for all of your incoming props

export default Cards;