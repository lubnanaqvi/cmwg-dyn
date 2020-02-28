import React from "react"
import styled from "styled-components"
const OurOrgBtn = ({ btntext, handleClick, showGradient }) => {
  const StyledButton = styled.div`
    display: inline-block;
    background-color: ${showGradient ? "#39755c" : "black"};
    background-image: ${showGradient ? "linear-gradient(#73aaaf,#204033)" : ""};
    color: white;
    margin: 0 1% 1% 0;
    padding: 1%;
    font-size: 0.9em;
    &:focus,
    &:hover,
    &:active {
      background-image: none;
      background-color: #444;
      cursor: pointer;
    }
    @media (max-width: 750px) {
      margin-bottom: 5%;
    }
  `
  return <StyledButton onClick={handleClick}>{btntext}</StyledButton>
}

export default OurOrgBtn
