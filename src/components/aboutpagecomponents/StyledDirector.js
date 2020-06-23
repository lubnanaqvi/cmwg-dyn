import React from "react"
import styled from "styled-components"
import DirectorCard from "./DirectorCard"

const StyledDirector = ({ openDirID, bod, handleClick }) => {
  const { name, desc, id, title, pic } = bod
  const StyledDiv = styled.div`
    background-image: linear-gradient(to left, #87189d, #451559);
    width: 90%;
    margin: 2% auto;
    display: grid;
    min-height: 200px;
    grid-template-columns: 40% auto;
    grid-template-rows: auto auto;
    border: solid 1px #aaa;
    color: white;
    @media (max-width: 1024px) {
      grid-template-columns: 100px auto;
      grid-template-rows: 150px auto;
    }
  `

  const StyledName = styled.div`
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    margin: 2%;
    @media (max-width: 1024px) {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
      padding-top: 25%;
      vertical-align: middle;
    }
  `
  const StyledH3 = styled.h3`
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  `
  const StyledTitle = styled.span`
    font-style: italic;
  `
  const StyledPara = styled.p`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    margin: 2%;
    font-size: 0.8em;
    @media (max-width: 1024px) {
      grid-column: 1 / span 2;
      grid-row: 2 / span 1;
    }
  `
  const StyledPic = styled.img`
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    width: 90%;
    margin: 3%;
    @media (max-width: 1024px) {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
      margin: 1%;
      background-size: contain;
    }
  `
  const StyledBtn = styled.span`
    font-style: italic;
    text-decoration: underline;
    &:hover {
      font-style: normal;
      cursor: pointer;
      color: #bee6d6;
    }
  `
  const truncated_desc = desc.desc.substr(0, 180) + "..."
  return (
    <StyledDiv>
      <StyledName>
        <StyledH3 className="cookiefont">{name}</StyledH3>
        <StyledTitle>{title}</StyledTitle>
      </StyledName>
      <StyledPic src={pic.file.url || ""} alt="" />
      <StyledPara>
        {truncated_desc}{" "}
        <StyledBtn onClick={handleClick} id={id}>
          Read More
        </StyledBtn>
      </StyledPara>
      <DirectorCard
        openDirID={openDirID}
        dir={bod}
        id={bod.id}
        handleClick={handleClick}
      />
    </StyledDiv>
  )
}
export default StyledDirector
