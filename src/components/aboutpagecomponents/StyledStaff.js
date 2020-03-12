import React from "react"
import styled from "styled-components"
import StaffCard from "./StaffCard"
const StyledStaff = ({ openStaffId, src, details, handleClick }) => {
  const StyledDiv = styled.div`
    width: 90%;
    margin: 2% auto;
    display: grid;
    min-height: 200px;
    border: solid 1px white;
    grid-template-columns: 40% auto;
    color: white;
    @media (max-width: 1024px) {
      grid-template-columns: 50% auto;
    }
  `
  const StyledPic = styled.div`
    background-image: url(${src});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 3%;
  `
  const StyledName = styled.div`
    margin: 2%;
    padding-top: 25%;
  `
  const StyledH3 = styled.h3`
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  `
  const StyledTitle = styled.span`
    font-style: italic;
    @media (max-width: 1024px) {
      font-size: 0.8em;
    }
  `
  const StyledDetailsBtn = styled.span`
    border: solid 1px #ccc;
    display: block;
    width: 80%;
    margin-top: 2%;
    padding: 2%;
    text-align: center;
    cursor: pointer;
    font-size: 0.8em;
    transition: border-color 1s linear;
    &:hover {
      border-color: white;
    }
    @media (max-width: 1024px) {
      font-size: 0.8em;
    }
  `
  return (
    <StyledDiv>
      <StyledPic />
      <StyledName>
        <StyledH3 className="cookiefont">{details.name}</StyledH3>
        <StyledTitle>{details.title}</StyledTitle>
        <StyledDetailsBtn onClick={handleClick} id={details.id}>
          Bio &amp; Contact Information
        </StyledDetailsBtn>
      </StyledName>
      <StaffCard
        pic={src}
        openStaffId={openStaffId}
        details={details}
        id={details.id}
        clickHandler={handleClick}
      />
    </StyledDiv>
  )
}
export default StyledStaff
