import React from "react"
import styled from "styled-components"
import StyledSmallHeading from "../utils/StyledSmallHeading"
const EventCard = ({ event }) => {
  const { name, details, ww, link, pic } = event
  const StyledCard = styled.div`
    background-color: white;
    width: 90%;
    margin: 2% auto;
    border: solid 1px black;
    padding: 2%;
  `
  const StyledDiv = styled.div`
    margin: 1%;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1%;
    @media (max-width: 750px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
    }
  `
  const StyledPic = styled.div`
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    background-image: url(${require(`../../images/${pic}`)});
    height: 232px;
    width: 200px;
    background-size: cover;
    background-positon: center;
    margin: auto;
    @media (max-width: 750px) {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }
  `
  const StyledWW = styled.h4`
    text-decoration: underline;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    margin: 0;
    padding: 0;
    @media (max-width: 750px) {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
    }
  `
  const StyledPara = styled.p`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    padding: 0;
    @media (max-width: 750px) {
      grid-column: 1 / span 1;
      grid-row: 3 / span 1;
    }
  `
  const StyledCTA = styled.a`
    background-color: #ffc72c;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    text-align: center;
    display: block;
    width: 30%;
    padding: 1%;
    margin: auto;
    &:hover {
      background-color: #333;
      color: white;
    }
  `

  return (
    <StyledCard>
      <StyledSmallHeading t={name} />
      <StyledDiv>
        <StyledPic />
        <StyledWW>{ww}</StyledWW>
        <StyledPara>
          {details}
          <StyledCTA href={link}>Register</StyledCTA>
        </StyledPara>
      </StyledDiv>
    </StyledCard>
  )
}
export default EventCard
