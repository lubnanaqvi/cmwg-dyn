import React from "react"
import styled from "styled-components"
import ProgramDetails from "./ProgramDetails"
const ProgramCard = ({ item, clickHandler, openedCard }) => {
  const { id, pic, heading, text, date } = item
  const StyledDiv = styled.div`
    position: relative;
  `
  const StyledCard = styled.div`
    background-image: linear-gradient(to left, #87189d, #451559);
    color: white;
    width: 95%;
    margin: 1% auto;
    border: solid 1px black;
    display: grid;
    grid-template-columns: ${id % 2 === 0 ? "300px 1fr" : "1fr 300px"};
    grid-template-rows: 50px 150px;
    grid-gap: 1vw;
    padding: 1%;
    @media (max-width: 750px) {
      grid-template-columns: 70px 1fr;
    }
  `
  const StyledPic = styled.div`
    background-image: url(${require(`../../images/${pic}`)});
    background-size: cover;
    grid-column: ${id % 2 === 0 ? "1" : "2"} / span 1;
    grid-row: 1 / span 2;
    @media (max-width: 750px) {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }
  `
  const StyledText = styled.div`
    grid-column: ${id % 2 === 0 ? "2" : "1"} / span 1;
    grid-row: 2 / span 1;
    @media (max-width: 750px) {
      grid-column: 1 / span 2;
      grid-row: 2 / span 1;
    }
  `
  const StyledDate = styled.p`
    font-style: italic;
  `
  const StyledTitle = styled.div`
    grid-column: ${id % 2 === 0 ? "2" : "1"} / span 1;
    grid-row: 1 / span 1;
    @media (max-width: 750px) {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    }
    & > * {
      margin: 0;
      padding: 0;
    }
  `
  const ReadMore = styled.span`
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
  `
  const truncated_text = text.substr(0, 180) + "..."
  return (
    <StyledDiv>
      <StyledCard>
        <StyledPic />
        <StyledTitle>
          <h4>{heading}</h4>
          <StyledDate>{date}</StyledDate>
        </StyledTitle>
        <StyledText>
          {truncated_text}
          <ReadMore onClick={clickHandler} id={id}>
            Read More
          </ReadMore>
        </StyledText>
      </StyledCard>
      <ProgramDetails
        item={item}
        clickHandler={clickHandler}
        openedCard={openedCard}
      />
    </StyledDiv>
  )
}
export default ProgramCard