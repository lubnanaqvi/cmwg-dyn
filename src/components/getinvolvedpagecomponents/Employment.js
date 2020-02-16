import React from "react"
import styled from "styled-components"

const Employment = ({ clickHandler, openid, myid }) => {
  const StyledDiv = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 50%;
    margin: auto;
    background-color: white;
    color: black;
    border: solid 1px black;
    display: ${myid === openid ? "block" : "none"};
    @media (max-width: 1024px) {
      height: 30%;
    }
  `
  const StyledPara = styled.p`
    margin: 5%;
  `
  const CloseBtn = styled.div`
    width: 100px;
    margin: 3% auto;
    background-color: #451559;
    color: white;
    padding: 1%;
    text-align: center;
    &:hover {
      background-color: black;
      background-image: none;
      cursor: pointer;
    }
  `
  return (
    <StyledDiv onClick={clickHandler}>
      <StyledPara>
        Thank you for your interest in our organization. Unfortunately we do not
        have any openings at this time. Please check back again later.
      </StyledPara>
      <CloseBtn>Close</CloseBtn>
    </StyledDiv>
  )
}
export default Employment
