import React from "react"
import styled from "styled-components"
import StaffCard from "./StaffCard"
const StyledStaff = ({ openStaffId, src, details, handleClick }) => {
  const StyledDiv = styled.div`
    width: 90%;
    margin: 2% auto;
    display: grid;
    min-height: 200px;
    border: solid 1px #aaa;
    grid-template-columns: 40% auto;
    color: #ddd;
    &:hover {
      border: solid 1px white;
      color: white;
      cursor: pointer;
    }
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
  return (
    <StyledDiv onClick={handleClick} id={details.id}>
      <StyledPic onClick={handleClick} id={details.id} />
      <StyledName onClick={handleClick} id={details.id}>
        <StyledH3 className="cookiefont">{details.name}</StyledH3>
        <StyledTitle>{details.title}</StyledTitle>
      </StyledName>
      <StaffCard
        pic={src}
        openStaffId={openStaffId}
        details={details}
        id={details.id}
      />
    </StyledDiv>
  )
}
export default StyledStaff
