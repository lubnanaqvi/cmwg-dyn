import React from "react"
import styled from "styled-components"
import StyledHeading from "../utils/StyledHeading"
const QMosqueShooting = ({ id }) => {
  const StyledDiv = styled.div``

  const StyledLink = styled.a`
    display: inline-block;
    color: #531d35;
    font-weight: bolder;
    margin: 1% 0;
    &:hover {
      font-style: italic;
    }
  `
  const StyledPara = styled.p`
    margin: 0 0 3% 0;
    padding: 0;
    line-height: 1.4em;
    @media (max-width: 750px) {
      margin-bottom: 5%;
    }
  `
  return (
    <StyledDiv id={id}>
      <StyledHeading t="Quebec Mosque Shooting" />
      <StyledPara>
        January 29th 2017 was a horrific day for Canada when an Islamophobe
        entered the Quebec City’s mosque and gunned down six innocent human
        beings who were in a sanctuary, in an act of prayer. This violence
        deeply impacted the Muslim community here in Waterloo Region. CMW held a
        number of circles of healings for women and youth. In addition, we held
        a town hall to bring community members and our political leaders
        together for a community conversation on Islamophobia.
      </StyledPara>
      <StyledPara>
        The Coalition of Muslim Women of KW’s Salaams KW, Salaams Canada
        campaign (Feb 14 to Feb 28) was a heartfelt idea of sharing kind
        sentiments and sweet treats in our community with the hope that by
        sharing a simple smile, salaam (Arabic word for “peace” and the common
        everyday greetings Muslims use), and sweet treat, we will be able to
        continue our efforts as a community to fight Islamophobia and build
        bridges of communication. The idea was inspired by a group of women in
        Dartmouth Nova Scotia.
      </StyledPara>
      <StyledPara>
        See our full report on Waterloo Region’s response to the shooting{" "}
        <StyledLink href="">here.</StyledLink>
      </StyledPara>
    </StyledDiv>
  )
}
export default QMosqueShooting
