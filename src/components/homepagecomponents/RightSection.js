import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import WhatsNew from "./WhatsNew"
import StyledHeading from "../utils/StyledHeading"
const RightSection = () => {
  const StyledSection = styled.section`
    background-color: white;
    padding: 1%;
  `

  const StyledLink = styled(Link)`
    background-image: linear-gradient(#73aaaf, #204033);
    color: white;
    padding: 2%;
    margin: 2%;
    text-decoration: none;
    display: inline-block;
    &:hover {
      cursor: pointer;
      background-color: black;
      background-image: none;
    }
  `
  return (
    <StyledSection>
      <StyledHeading t="What we do" />
      <StyledLink to="/services">Services for Muslim Women</StyledLink>
      <StyledLink to="/services">Services for General Public</StyledLink>
      <StyledHeading t="What's new" />
      <WhatsNew />
    </StyledSection>
  )
}
export default RightSection
