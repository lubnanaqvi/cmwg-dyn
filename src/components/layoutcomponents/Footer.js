import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import icons from "../../json/iconpaths.json"
import iconpic1 from "../../images/phones.svg"
import iconpic2 from "../../images/email.svg"
import iconpic3 from "../../images/twitter.svg"
import iconpic4 from "../../images/facebook.svg"
import iconpic5 from "../../images/youtube.svg"
import SocialIcon from "./SocialIcon.js"
const Footer = () => {
  const iconPics = [iconpic1, iconpic2, iconpic3, iconpic4, iconpic5]
  const iconsList = icons.map((icon, i) => {
    return (
      <SocialIcon
        key={i}
        hrefTo={icon.link}
        t={i > 1 ? "_blank" : "_self"}
        pic={iconPics[i]}
        name={icon.name}
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
  const StyledAnchor = styled.a`
    font-size: 0.8em;
    margin: 1%;
    color: white;
    text-decoration: none;
    transition: 0.5s ease-in;
    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 1024px) {
      display: block;
    }
  `
  const StyledSpan = styled.span`
    font-size: 0.8em;
    margin: 0;
    @media (max-width: 1024px) {
      display: block;
    }
  `
  const StyledDiv = styled.div`
    padding: 0 0 1% 0;
    margin: 0 0 1% 0;
    @media (max-width: 1024px) {
      margin: 5% 0;
    }
  `
  return (
    <StyledFooter>
      {iconsList}
      <StyledDiv>
        <StyledLink to="/programsandservices">
          Programs &amp; Services
        </StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/getinvolved">Get Involved</StyledLink>
      </StyledDiv>
      <StyledDiv>
        <StyledSpan>&copy; Coalition of Muslim Women KW 2020</StyledSpan>
        <StyledAnchor
          href="https://goo.gl/maps/zR9yTA4Qci5Nr9LE9"
          target="_blank"
        >
          65 Hanson Avenue, Kitchener, Ontario &#8599;
        </StyledAnchor>
        <StyledSpan>Phone: 519-576-5040 ext. 3468</StyledSpan>
      </StyledDiv>
    </StyledFooter>
  )
}
export default Footer
