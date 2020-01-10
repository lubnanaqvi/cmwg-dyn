import React from "react";
import styled from "styled-components";
const HeadingAndPara = ({ h, p }) => {
  const StyledDiv = styled.div`
    margin: 1% 0 2% 0;
  `;
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    padding: 0;
    margin: 0;
  `;
  const StyledPara = styled.p`
    padding: 0;
    margin: 0;
    line-height: 1.4em;
  `;
  return (
    <StyledDiv>
      <StyledH2 className="cookiefont">{h}</StyledH2>
      <StyledPara>{p}</StyledPara>
    </StyledDiv>
  );
};
export default HeadingAndPara;
