import React from "react"
import styled from "styled-components"
import ValueCard from "./ValueCard"
const StyledValue = ({ valueObj, handleClick, openedValue, gridPoints }) => {
  const { id, txt, desc } = valueObj
  const { gridCol, gridRow, sp, small } = gridPoints
  const StyledDiv = styled.div`
    text-align: center;
    border: solid 2px white;
    border-radius: 50%;
    grid-column: ${gridCol} / span 1;
    grid-row: ${gridRow} / span 2;
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
    @media (max-width: 1024px) {
      grid-column: ${gridCol > 5 ? gridCol - 5 : gridCol} / span 1;
      grid-row: ${gridCol > 5 ? gridRow + 1 : gridRow} / span 2;
    }
    @media (max-width: 750px) {
      grid-column: ${gridCol > 5 ? gridCol - 5 : gridCol} / span 2;
      grid-row: ${small || gridRow} / span 2;
    }
  `

  const StyledText = styled.h4`
    margin-top: ${sp ? "20%" : "35%"};
    font-size: 1.4em;
    @media (max-width: 1024px) {
      margin-top: ${sp ? "20%" : "25%"};
    }
  `
  return (
    <StyledDiv onClick={handleClick} id={id}>
      <StyledText onClick={handleClick} id={id} className="cookiefont">
        {txt}
      </StyledText>
      <ValueCard openedValue={openedValue} id={id} desc={desc} txt={txt} />
    </StyledDiv>
  )
}
export default StyledValue
