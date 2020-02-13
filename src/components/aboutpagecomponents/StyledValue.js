import React from "react"
import styled from "styled-components"

const StyledValue = ({ valueObj, handleClick }) => {
  const { id, txt } = valueObj
  const StyledDiv = styled.div`
    text-align: center;
    background-image: linear-gradient(to left bottom, #c33764, #1d2671);
    border-radius: 50%;
    position: relative;
    transition: all 0.5s linear;
    top: 0;
    &:hover {
      top: -30px;
      cursor: pointer;
    }
    @media (max-width: 750px) {
      grid-column: ${id > 3 ? id - 3 : id} / span 1;
      grid-row: ${id > 3 ? 2 : 1} / span 1;
    }
  `
  const StyledText = styled.h4`
    margin-top: 35%;
    font-size: 1.4em;
    color: white;
    @media (max-width: 1024px) {
      font-size: 1em;
    }
  `
  return (
    <StyledDiv onClick={handleClick} onMouseEnter={handleClick} id={id}>
      <StyledText onClick={handleClick} id={id} className="cookiefont">
        {txt}
      </StyledText>
    </StyledDiv>
  )
}
export default StyledValue
