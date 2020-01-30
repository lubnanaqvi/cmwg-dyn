import React from "react"
import styled from "styled-components"
import Curve from "../layoutcomponents/Curve"
import HeroText from "./HeroText.js"
const Hero = ({ heroID }) => {
  const StyledDiv = styled.div`
    background-image: linear-gradient(to left, #87189d, #451559);
  `
  return (
    <StyledDiv>
      <Curve />
      <HeroText heroTextNumber={heroID} />
    </StyledDiv>
  )
}
export default Hero
