import React from "react"
import styled from "styled-components"
import StyledSmallHeading from "../utils/StyledSmallHeading"
const EventCard = ({ event }) => {
  const { name, details, ww, link, pic } = event
  const StyledCard = styled.div`
    background-image: linear-gradient(#383838, #434343);
    color: white;
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
    margin: 2% auto;
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
  const StyledPara = styled.div`
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
    color: #383838;
    text-decoration: none;
    text-align: center;
    display: block;
    width: 30%;
    padding: 1%;
    margin: auto;
    transition: background-color 0.3s linear;
    &:hover {
      background-color: white;
    }
  `
  const d = details.split("\n").map((p, i) => <p key={i}>{p}</p>)
  return (
    <StyledCard>
      <StyledSmallHeading t={name} />
      <StyledDiv>
        <StyledPic />
        <StyledWW>{ww}</StyledWW>
        <StyledPara>
          {d}
          <StyledCTA href={link}>Register</StyledCTA>
        </StyledPara>
      </StyledDiv>
    </StyledCard>
  )
}
export default EventCard
