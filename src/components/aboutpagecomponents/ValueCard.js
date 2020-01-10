import React from "react"
import styled from "styled-components"
const ValueCard = ({ id, txt, desc, openedValue }) => {
  const StyledDesc = styled.div`
    box-sizing: border-box;
    background-color: white;
    color: black;
    border: solid 1px black;
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    cursor: pointer;
    padding: 2%;
    display: ${openedValue === id ? "block" : "none"};
  `
  const BackBtn = styled.span`
    padding: 1%;
    background-color: #42275a;
    color: white;
    font-weight: normal;
    &:hover {
      background-color: black;
      cursor: pointer;
    }
  `
  return (
    <StyledDesc
      onClick={() => {
        openedValue = -1
      }}
    >
      <h2>{txt}</h2>
      <p>{desc}</p>
      <BackBtn>Back</BackBtn>
    </StyledDesc>
  )
}
export default ValueCard
