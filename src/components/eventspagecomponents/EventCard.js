import React from "react"
import styled from "styled-components"
import StyledSmallHeading from "../utils/StyledSmallHeading"
const EventCard = ({ event }) => {
  const { cardId, name, details, whenAndWhere, link, pic, linktext } = event
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
      grid-template-rows: auto auto auto auto;
    }
    a {
      color: inherit;
    }
  `
  const StyledPic = styled.img`
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    width: 200px;
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
      padding-bottom: 1em;
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
    @media (max-width: 750px) {
      width: 70%;
      margin: 0 auto;
    }
  `
  const d = details.details.split("\\n").map((p, i) => {
    let parsed_desc = p
    // check if it is a link
    if (p.indexOf("<a") !== -1) {
      const start = p.indexOf("'>") + 2
      const stop = p.indexOf("</a>")
      const aText = p.substring(start, stop)
      const hrefStart = p.indexOf("href=") + 6
      const hrefStop = p.indexOf("'>")
      const aHref = p.substring(hrefStart, hrefStop)
      const pdf = require(`../../pdf/${aHref}`)
      parsed_desc = <a href={pdf}>{aText}</a>
    }
    return <p key={i}>{parsed_desc}</p>
  })
  return (
    <StyledCard id={cardId}>
      <StyledSmallHeading t={name} />
      <StyledDiv>
        <StyledPic src={pic.file.url || ""} alt="" />
        <StyledWW>{whenAndWhere}</StyledWW>
        <StyledPara>
          {d}
          <StyledCTA href={link}>{linktext || "Register"}</StyledCTA>
        </StyledPara>
      </StyledDiv>
    </StyledCard>
  )
}
export default EventCard
