import React from "react"
import styled from "styled-components"
import dir0 from "../../images/dir0.jpg"
import dir1 from "../../images/dir1.jpg"
import dir2 from "../../images/dir2.jpg"
import dir3 from "../../images/dir3.jpg"
import dirdesc from "../../json/directorsdesc.json"

const Directors = () => {
  const bod_pics = [dir0, dir1, dir2, dir3]
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
  const ContainerDiv = styled.div`
    display: grid;
    width: 90%;
    margin: auto;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  `
  const dirs_list = bod_pics.map((p, i) => {
    const StyledPic = styled.div`
      background-image: url(${p});
      background-repeat: no-repeat;
      background-size: cover;
      grid-column: 1 / span 1;
      grid-row: 1 / span 2;
      margin: 3%;
      @media (max-width: 1024px) {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        margin: 1%;
        background-size: contain;
      }
    `
    return (
      <StyledDiv key={i}>
        <StyledPic />
        <StyledName>
          <StyledH3 className="cookiefont">{dirdesc[i].name}</StyledH3>
          <StyledTitle>{dirdesc[i].title}</StyledTitle>
        </StyledName>
        <StyledPara>{dirdesc[i].desc}</StyledPara>
      </StyledDiv>
    )
  })
  return <ContainerDiv>{dirs_list}</ContainerDiv>
}
export default Directors
