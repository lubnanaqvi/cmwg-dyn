import React from "react"
import pageinfo from "../../json/pageinfo.json"
import styled from "styled-components"

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
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    padding: 0;
    margin: 0;
  `
  const h = pageinfo[heroTextNumber].heading
  const p = pageinfo[heroTextNumber].para
  return (
    <StyledDiv>
      <StyledH2 className="cookiefont">{h}</StyledH2>
      <p>{p}</p>
    </StyledDiv>
  )
}
export default HeroText
