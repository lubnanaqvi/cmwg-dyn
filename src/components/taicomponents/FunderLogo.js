import React from "react"
import styled from "styled-components"

const FunderLogo = ({ pic, expand, alt }) => {
  const StyledImg = styled.img`
    display: inline-block;
    width: ${expand};
    margin: 5%;
    vertical-align: middle;
    @media (max-width: 750px) {
      display: block;
      width: 90%;
      margin: 3% auto;
    }
  `
  return <StyledImg src={pic} alt={alt} />
}
export default FunderLogo
