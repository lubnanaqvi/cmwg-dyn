import React from "react"
import styled from "styled-components"
const NewsCard = ({ newsitem }) => {
  const { text, links, pic } = newsitem
  const StyledCard = styled.div`
    background-image: linear-gradient(to top left, #73aaaf, teal);
    color: white;
    width: 90%;
    margin: 2% auto;
    padding: 1%;
  `
  const StyledPara = styled.p``
  const StyledAnchor = styled.a`
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 1%;
    margin: 2%;
    border: solid 1px #ccc;
    transition: border-color 0.3s linear;
    &:hover {
      border-color: white;
    }
  `
  const StyledImg = styled.img`
    width: 120px;
    display: inline-block;
    vertical-align: top;
    margin: 1%;
    @media (max-width: 750px) {
      display: block;
      margin: auto;
    }
  `
  const StyledDiv = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 80%;
    margin: 1%;
    @media (max-width: 750px) {
      width: 100%;
    }
  `
  const linksList = links.map((l, i) => (
    <StyledAnchor href={l.href} key={i} target="_blank" rel="noopener">
      {l.source}
    </StyledAnchor>
  ))
  const photo = pic ? (
    <StyledImg src={require("../../images/" + pic)} alt="" />
  ) : (
    ""
  )
  return (
    <StyledCard>
      {photo}
      <StyledDiv>
        <StyledPara>{text}</StyledPara>
        <div>{linksList}</div>
      </StyledDiv>
    </StyledCard>
  )
}
export default NewsCard
