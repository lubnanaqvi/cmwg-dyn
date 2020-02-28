import React from "react"
import styled from "styled-components"
import Funders from "./Funders"
import StyledHeading from "../utils/StyledHeading"
const Thanks = () => {
  const StyledDiv = styled.div`
    position: relative;
    top: 400px;
    text-align: left;
    @media (max-width: 1200px) {
      top: 350px;
    }
    @media (max-width: 800px) {
      top: 250px;
    }
    @media (max-width: 750px) {
      top: 0;
      font-size: 0.8em;
      width: 95%;
      margin: auto;
    }
  `
  return (
    <StyledDiv>
      <StyledHeading t="A heartfelt thank you to our funders" />
      <Funders />
    </StyledDiv>
  )
}
export default Thanks
