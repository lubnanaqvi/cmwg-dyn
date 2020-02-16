import React from "react"
import styled from "styled-components"

const Donation = ({ clickHandler, openid, myid }) => {
  const StyledDiv = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    margin: auto;
    padding: 5%;
    background-color: white;
    color: black;
    border: solid 1px black;
    display: ${myid === openid ? "block" : "none"};
    @media (max-width: 1024px) {
      height: 40%;
    }
  `
  const StyledPara = styled.p`
    margin-top: 0;
  `
  const CloseBtn = styled.div`
    width: 100px;
    margin: 3% auto;
    background-color: #451559;
    color: white;
    padding: 1%;
    text-align: center;
    &:hover {
      background-color: black;
      background-image: none;
      cursor: pointer;
    }
  `
  const StyledH4 = styled.h4`
    margin-bottom: 0;
  `
  return (
    <StyledDiv>
      <StyledPara>
        Please mail your donation cheque to the following address or call
        519-576-0540 ext 3468 to make a donation.
      </StyledPara>
      <StyledH4>Mailing Address:</StyledH4>
      <StyledPara>
        Coalition of Muslim Women of KW <br />
        The Family Centre 65 Hanson Avenue
        <br />
        Kitchener ON N2C 2E2
      </StyledPara>
      <CloseBtn onClick={clickHandler}>Close</CloseBtn>
    </StyledDiv>
  )
}
export default Donation
