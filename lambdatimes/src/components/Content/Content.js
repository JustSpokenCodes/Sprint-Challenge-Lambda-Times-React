import React, { Component } from 'react';
import styled from "styled-components";
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const HeaderStyle = styled.header ` 
  display: inline-flex;`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({cards: cardData, tabs: tabData})
  }

  changeSelected = tab => {
    this.setState({selected: tab})
  };

  filterCards = () => {
    let newsStory = this.state.cards
      if (this.state.selected === 'all') {
        return this.state.cards;
      } let match = [...this.state.cards];
      return match.filter( v => {
        return v.tab === this.state.selected
      })
  };

  render() {
    console.log (this.state.selected)
    return (
      <div className="content-container">
        
        <Tabs tabs={this.state.tabs} 
          changeSelected = {this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
/* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */

    /* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */