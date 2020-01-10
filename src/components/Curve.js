import React from "react";
import styled from "styled-components";
import curvy from "../images/hero-flip.png";
import curvy_small from "../images/hero-flip-small.png";
const Curve = () => {
  const StyledDiv = styled.div`
    background-image: url(${curvy});
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    @media (max-width: 1024px) {
      background-image: url(${curvy_small});
      position: relative;
      top: -2px;
    }
  `;
  return <StyledDiv />;
};
export default Curve;
