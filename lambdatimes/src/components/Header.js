import React from 'react';
import styled from "styled-components"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyle = styled.div `
  display: inline-flex
  flex-direction:row;
  width: 100%;
  justify-content: center
`
const SpanStyle = styled.span `
  font size: 25px;
  margin: 40px;`

const Hstyle = styled.h1 `
  font-size: 45px;
  margin: 20px`

const Header = () => {
  return (
    <div className="header">
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  )
}

export default Header