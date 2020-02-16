import React from "react"
import styled from "styled-components"
import phoneIcon from "../../images/phones.svg"
import emailIcon from "../../images/email.svg"
const StaffCard = ({ pic, openStaffId, details, clickHandler }) => {
  const { id, name, desc, title, phone, email } = details
  const StyledDiv = styled.div`
    box-sizing: border-box;
    background-color: rgba(40, 40, 40, 0.9);
    color: white;
    border: solid 1px black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 2%;
    display: ${openStaffId === id ? "block" : "none"};
  `
  const StyledPic = styled.div`
    width: 30%;
    height: 30%;
    background-image: url(${pic});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 1024px) {
      display: block;
      height: 10%;
      width: 95%;
      margin: auto;
    }
  `
  const StyledDetails = styled.div`
    width: 58%;
    padding: 1%;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 1024px) {
      display: block;
      width: 95%;
      margin: auto;
    }
  `
  const StyledSpan = styled.span`
    font-style: italic;
  `
  const StyledPara = styled.p`
    font-weight: normal;
    line-height: 1.4em;
  `
  const StyledAnchor = styled.a`
    color: inherit;
    text-decoration: none;
    font-style: italic;
    display: inline-block;
    text-align: center;
    margin: 2% 0;
    padding-right: 5%;
    padding-left: 0;
    vertical-align: middle;
    &:hover {
      text-decoration: underline;
    }
  `
  const StyledIcon = styled.img`
    width: 35px;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0;
  `
  const BackBtn = styled.span`
    padding: 1% 2%;
    border: solid 1px #ccc;
    color: #ccc;
    margin-left: 80%;
    font-weight: normal;
    &:hover {
      border-color: white;
      color: white;
      cursor: pointer;
    }
  `

  const ph = phone ? (
    <StyledAnchor href={"tel:" + phone.split(" ")[0]}>
      <StyledIcon src={phoneIcon} alt="" />
      {phone}
    </StyledAnchor>
  ) : (
    ""
  )
  const em = email ? (
    <StyledAnchor href={"mailto:" + email}>
      <StyledIcon src={emailIcon} alt="" />
      {email}
    </StyledAnchor>
  ) : (
    ""
  )
  const desc_paras = desc
    .split("\n")
    .map((p, i) => <StyledPara key={i}>{p}</StyledPara>)
  return (
    <StyledDiv>
      <StyledPic src={pic} />
      <StyledDetails>
        <h2>{name}</h2>
        <StyledSpan>{title}</StyledSpan>
        {desc_paras}
        {ph}
        {em}
        <BackBtn onClick={clickHandler}>Back</BackBtn>
      </StyledDetails>
    </StyledDiv>
  )
}
export default StaffCard
