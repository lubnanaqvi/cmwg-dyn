import React from "react"
import styled from "styled-components"
import Employment from "./Employment"
import Donation from "./Donation"
import MailingList from "./MailingList"
import { Link } from "gatsby"

const GetInvolvedPicCard = ({ gi, img, clickHandler, openid }) => {
  const { name, id, link } = gi
  const StyledDiv = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
  `
  const StyledCard = styled.div`
    background-color: rgba(30, 30, 30, 0.75);
    color: white;
    text-decoration: none;
    display: block;
    margin: 20px 10% 20px 10%;
    text-align: center;
    font-size: 24px;
    border: solid 1px white;
    margin-top: 20%;
    transition: background-color 0.5s linear;
    &:focus,
    &:hover,
    &:active {
      background-color: rgb(20, 20, 20);
    }
  `
  const StyledSpan = styled.span`
    display: block;
    padding: 2%;
    cursor: pointer;
  `
  const StyledAnchor = styled.a`
    display: block;
    padding: 2%;
    color: white;
    text-decoration: none;
  `
  const StyledLink = styled(Link)`
    display: block;
    padding: 2%;
    color: white;
    text-decoration: none;
  `
  let details = "",
    displayedName = ""
  switch (id) {
    case "0": {
      details = (
        <Employment clickHandler={clickHandler} openid={openid} myid={id} />
      )
      displayedName = (
        <StyledSpan onClick={clickHandler} id={id}>
          {name}
        </StyledSpan>
      )
      break
    }
    case "1": {
      details = (
        <Donation clickHandler={clickHandler} openid={openid} myid={id} />
      )
      displayedName = (
        <StyledSpan onClick={clickHandler} id={id}>
          {name}
        </StyledSpan>
      )
      break
    }
    case "2": {
      displayedName = <StyledLink to="/events">{name}</StyledLink>
      break
    }
    case "5": {
      details = (
        <MailingList clickHandler={clickHandler} openid={openid} myid={id} />
      )
      displayedName = (
        <StyledSpan onClick={clickHandler} id={id}>
          {name}
        </StyledSpan>
      )
      break
    }
    default: {
      displayedName = <StyledAnchor href={link}>{name}</StyledAnchor>
    }
  }
  return (
    <StyledDiv>
      <StyledCard className="cookiefont">{displayedName}</StyledCard>
      {details}
    </StyledDiv>
  )
}

export default GetInvolvedPicCard
