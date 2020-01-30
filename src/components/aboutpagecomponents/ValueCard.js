import React from "react"
import styled from "styled-components"
import values_array from "../../json/ourvalues.json"
const ValueCard = ({ openedValue, handleClick }) => {
  const StyledDiv = styled.div`
    display: ${openedValue === -1 ? "none" : "block"};
    margin:1%;
    text-align center;
    line-height:1.5em;
    @media (max-width:750px){
      width:90%;
    }
  `
  const StyledBtn = styled.span`
    text-decoration: underline;
    margin: 0 1%;
    display: ${openedValue === -1 ? "none" : "inline"};
    &:hover {
      cursor: pointer;
      font-weight: bolder;
    }
  `
  const StyledTitle = styled.span`
    font-size: 1.5em;
    padding: 0;
    margin: 0 1%;
  `
  const res =
    openedValue === -1 ? (
      ""
    ) : (
      <p>
        <StyledTitle className="cookiefont">
          {values_array[openedValue].txt}:
        </StyledTitle>
        {values_array[openedValue].desc}
        <StyledBtn>Close</StyledBtn>
      </p>
    )
  return <StyledDiv onClick={handleClick}>{res}</StyledDiv>
}
export default ValueCard
