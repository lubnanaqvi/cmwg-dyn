import React from "react"
import styled from "styled-components"
const StaffCard = ({ pic, openStaffId, details }) => {
  const { id, name, desc, title } = details
  const StyledDiv = styled.div`
    box-sizing: border-box;
    background-color: rgba(40, 40, 40, 0.9);
    color: white;
    border: solid 1px black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 2%;
    display: ${openStaffId === id ? "block" : "none"};
  `
  const StyledPic = styled.div`
    width: 50%;
    height: 50%;
    background-image: url(${pic});
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1024px) {
      width: 50vw;
      height: 50vh;
      background-size: contain;
    }
  `
  const StyledDetails = styled.div`
    width: 75%;
    background-color: white;
    color: black;
    position: relative;
    top: -10%;
    left: 15%;
    padding: 3%;
    @media (max-width: 1024px) {
      top: -2%;
    }
  `
  const StyledSpan = styled.span`
    font-style: italic;
  `
  const StyledPara = styled.p`
    font-weight: normal;
  `
  const BackBtn = styled.span`
    padding: 2%;
    background-color: #451559;
    color: #aaa;
    margin-left: 80%;
    font-weight: normal;
    &:hover {
      border: solid 1px #383838;
      color: white;
      cursor: pointer;
    }
  `
  return (
    <StyledDiv onClick={() => (openStaffId = -1)}>
      <StyledPic src={pic} />
      <StyledDetails>
        <h2>{name}</h2>
        <StyledSpan>{title}</StyledSpan>
        <StyledPara>{desc}</StyledPara>
        <BackBtn>Back</BackBtn>
      </StyledDetails>
    </StyledDiv>
  )
}
export default StaffCard
