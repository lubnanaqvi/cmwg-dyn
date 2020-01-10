import React from "react";
import styled from "styled-components";
const OurOrgBtn = ({ btntext, handleClick, bgcolor }) => {
  const StyledButton = styled.div`
    display: inline-block;
    background-color: ${bgcolor};
    color: white;
    padding: 2%;
    margin: 1%;
    font-size: 0.9em;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      background-color: grey;
      cursor: pointer;
    }
  `;
  return <StyledButton onClick={handleClick}>{btntext}</StyledButton>;
};

export default OurOrgBtn;
