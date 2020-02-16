import React from "react"
import styled from "styled-components"

const ProgramDetails = ({ item, clickHandler, openedCard }) => {
  const { id, heading, date, text } = item
  const parsedText = text.split("\n").map((t, i) => <p key={i}>{t}</p>)
  const StyledDiv = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    border: solid 1px black;
    background-color: white;
    color: black;
    padding: 1%;
    display: ${id === openedCard ? "block" : "none"};
    z-index: 8;
  `
  const StyledDate = styled.p`
    padding: 0;
    margin: 0;
    font-style: italic;
  `
  const StyledBackBtn = styled.div`
    background-color: #ffc72c;
    font-weight: bold;
    color: #383838;
    text-decoration: none;
    text-align: center;
    display: block;
    width: 30%;
    padding: 1%;
    margin: auto;
    cursor: pointer;
    transition: background-color 0.3s linear;
    &:hover {
      background-color: #383838;
      color: white;
    }
  `

  return (
    <StyledDiv>
      <h3>{heading}</h3>
      <StyledDate>{date}</StyledDate>
      {parsedText}
      <StyledBackBtn onClick={clickHandler}>Back</StyledBackBtn>
    </StyledDiv>
  )
}
export default ProgramDetails
