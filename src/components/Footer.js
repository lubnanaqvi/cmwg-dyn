import React from "react"
import styled from "styled-components"
import SVGIcon from "./SVGIcon"
import icons from "../json/iconpaths.json"
import { Link } from "gatsby"
const Footer = () => {
  const iconsList = icons.map((icon, i) => {
    return (
      <SVGIcon
        key={i}
        link={icon.link}
        iconName={icon.name}
        paths={icon.paths}
      />
    )
  })
  const StyledFooter = styled.footer`
    background-color: #383838;
    color: white;
    padding: 5%;
    text-align: center;
  `
  const StyledLink = styled(Link)`
    margin: 1%;
    color: white;
    text-decoration: none;
    border-bottom: solid 1px white;
    transition: 0.5s ease-in;
    &:hover {
      border-bottom: solid 1px transparent;
    }
    @media (max-width: 750px) {
      font-size: 0.8em;
      margin: 2%;
    }
  `
  const StyledH4 = styled.h4`
    margin: 0;
    @media (max-width: 750px) {
      margin: 2%;
    }
  `
  return (
    <StyledFooter>
      <StyledH4>Copyright &copy; 2019</StyledH4>
      {iconsList}
      <div>
        <StyledLink to="/programsandservices">
          Programs &amp; Services
        </StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/getinvolved">Contact</StyledLink>
      </div>
    </StyledFooter>
  )
}
export default Footer
