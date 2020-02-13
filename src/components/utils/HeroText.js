import React from "react"
import pageinfo from "../../json/pageinfo.json"
import styled from "styled-components"
import StyledHeading from "./StyledHeading.js"

const HeroText = ({ heroTextNumber }) => {
  const StyledDiv = styled.div`
    width: 80%;
    margin: auto;
    color: white;
    padding: 0.5% 0;
    @media (max-width: 1024px) {
      width: 90%;
    }
  `
  const h = pageinfo[heroTextNumber].heading
  const p = pageinfo[heroTextNumber].para
  return (
    <StyledDiv>
      <StyledHeading t={h} />
      <p>{p}</p>
    </StyledDiv>
  )
}
export default HeroText
