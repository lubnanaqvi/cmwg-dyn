import React from "react"
import styled from "styled-components"

const GetInvolvedCard = ({ gi, img }) => {
  const { name, id, link } = gi
  const StyledDiv = styled.div`
    background-image: linear-gradient(to bottom, #73aaaf, teal);
  `
  const StyledAnchor = styled.a`
    color: white;
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 2em;
    &:hover {
      text-decoration: underline;
    }
  `
  const StyledImg = styled.img`
    display: block;
    height: 85px;
    width: 85px;
    padding: 5%;
    margin: auto;
  `
  return (
    <StyledDiv id={id}>
      <StyledImg src={img} />
      <StyledAnchor href={link} className="cookiefont">
        {name}
      </StyledAnchor>
    </StyledDiv>
  )
}

export default GetInvolvedCard
