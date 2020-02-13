import React from "react"
import styled from "styled-components"

const StyledSmallHeading = ({ t }) => {
  const StyledH2 = styled.h3`
    font-size: 2em;
    text-decoration: underline;
    padding: 0;
    margin: 0;
    display: block;
  `
  return <StyledH2 className="cookiefont">{t}</StyledH2>
}

export default StyledSmallHeading
