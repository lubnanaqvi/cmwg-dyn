import React from "react";
import styled from "styled-components";
import WhatsNew from "./WhatsNew";
const RightSection = () => {
  const StyledSection = styled.section`
    background-color: white;
    padding: 1%;
  `;
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    padding: 0;
    margin: 0;
  `;
  const StyledLink = styled.a`
    background-color: #73aaaf;
    color: white;
    padding: 2%;
    margin: 2%;
    text-decoration: none;
    display: inline-block;
  `;
  return (
    <StyledSection>
      <StyledH2 className="cookiefont">What we do</StyledH2>
      <StyledLink>Services for Muslim Women</StyledLink>
      <StyledLink>Services for Everyone</StyledLink>
      <StyledH2 className="cookiefont">What's new</StyledH2>
      <WhatsNew />
    </StyledSection>
  );
};
export default RightSection;
