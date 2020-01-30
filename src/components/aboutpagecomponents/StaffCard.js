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
    background-position: center;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 1024px) {
      width: 45vw;
      height: 50vh;
    }
    @media (max-width: 750px) {
      display: block;
      width: 95%;
      margin: auto;
    }
  `
  const StyledDetails = styled.div`
    width: 48%;
    background-color: white;
    color: black;
    padding: 1%;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 1024px) {
      width: 35vw;
    }
    @media (max-width: 750px) {
      display: block;
      width: 95%;
      margin: auto;
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
  const desc_paras = desc
    .split("\n")
    .map((p, i) => <StyledPara key={i}>{p}</StyledPara>)
  return (
    <StyledDiv onClick={() => (openStaffId = -1)}>
      <StyledPic src={pic} />
      <StyledDetails>
        <h2>{name}</h2>
        <StyledSpan>{title}</StyledSpan>
        {desc_paras}
        <BackBtn>Back</BackBtn>
      </StyledDetails>
    </StyledDiv>
  )
}
export default StaffCard
