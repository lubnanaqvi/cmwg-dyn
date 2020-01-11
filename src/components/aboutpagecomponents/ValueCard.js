import React from "react"
import styled from "styled-components"
import values_array from "../../json/ourvalues.json"
import HeadingAndPara from "../HeadingAndPara"
const ValueCard = ({ openedValue, handleClick }) => {
  const StyledDiv = styled.div`
    display: ${openedValue === -1 ? "none" : "block"};
    padding: 2%;
    margin: 2% auto;
    width:70%;
    border: solid 1px black;
    text-align center;
    @media (max-width:750px){
      width:90%;
    }
  `
  const StyledBtn = styled.span`
    background-color: #87189d;
    border: solid 1px grey;
    color: white;
    padding: 2%;
    display: ${openedValue === -1 ? "none" : "inline-block"};
    &:hover {
      cursor: pointer;
      background-color: black;
    }
  `
  const res =
    openedValue === -1 ? (
      ""
    ) : (
      <HeadingAndPara
        h={values_array[openedValue].txt}
        p={values_array[openedValue].desc}
      />
    )
  return (
    <StyledDiv onClick={handleClick}>
      {res}
      <StyledBtn>Close</StyledBtn>
    </StyledDiv>
  )
}
export default ValueCard
