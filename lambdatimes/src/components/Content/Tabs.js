import React from 'react';
import Tab from './Tab';
import styled from "styled-components";

const DivStyle = styled.div `
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map (tab => {
          return (
            <Tab 
              id= {tab.id}
              tab= {tab}
              changeSelected= {props.changeSelected} />
          )
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

/* map over the tabs provided on your props, create a new Tab component for each one.
  give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/