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
    background-size: contain;
    background-position: center;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 1024px) {
      display: block;
      height: 20%;
      width: 95%;
      margin: auto;
    }
  `
  const StyledDetails = styled.div`
    width: 48%;
    padding: 1%;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 1024px) {
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
    line-height: 1.4em;
  `
  const BackBtn = styled.span`
    padding: 2%;
    border: solid 1px #aaa;
    color: #aaa;
    margin-left: 80%;
    font-weight: normal;
    &:hover {
      border-color: white;
      color: white;
      cursor: pointer;
    }
  `
  const desc_paras = desc
    .split("\n")
    .map((p, i) => <StyledPara key={i}>{p}</StyledPara>)
  return (
    <StyledDiv>
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
