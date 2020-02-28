import React from "react"
import styled from "styled-components"
import StyledSmallHeading from "../utils/StyledSmallHeading"

const DirectorCard = ({ dir, openDirID, handleClick, src }) => {
  const { id, name, title, desc } = dir
  const StyledDiv = styled.div`
    box-sizing: border-box;
    background-color: rgba(90, 90, 90, 0.95);
    color: white;
    border: solid 1px black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    cursor: pointer;
    padding: 2%;
    display: ${openDirID === id ? "grid" : "none"};
    grid-template-columns: 120px auto;
    grid-template-rows: 150px auto;
  `
  const StyledPic = styled.img`
    width: 100px;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  `
  const StyledPara = styled.div`
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    line-height: 1.4em;
  `
  const StyledCloseBtn = styled.div`
    padding: 1%;
    border: solid 1px #ccc;
    color: #ccc;
    width: 30%;
    margin: 2% auto 0 auto;
    &:hover {
      border-color: white;
      color: white;
    }
  `
  return (
    <StyledDiv>
      <StyledPic src={src} alt={name} />
      <div>
        <StyledSmallHeading t={name} />
        <h4>{title}</h4>
      </div>
      <StyledPara>
        {desc}
        <StyledCloseBtn onClick={handleClick}>
          Back to Directors Page
        </StyledCloseBtn>
      </StyledPara>
    </StyledDiv>
  )
}
export default DirectorCard
