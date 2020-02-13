import React from "react"
import styled from "styled-components"

const StyledHeading = ({ t }) => {
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    padding: 0;
    margin: 0;
    display: block;
  `
  return <StyledH2 className="cookiefont">{t}</StyledH2>
}

export default StyledHeading
