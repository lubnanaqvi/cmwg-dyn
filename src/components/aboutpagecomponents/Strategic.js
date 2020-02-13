import React from "react"
import styled from "styled-components"
import StyledHeading from "../utils/StyledHeading"
import icon0 from "../../images/organization.png"
import icon1 from "../../images/leadership.png"
import icon2 from "../../images/community.png"
import icon3 from "../../images/raising.png"
import icon4 from "../../images/finance.png"
import pdf from "../../pdf/strategic.pdf"
const Strategic = () => {
  const st = [
    "Organizational Development",
    "Leadership Development & Capacity Building",
    "Community Service",
    "Raising CMW's Community Profile",
    "Financial Sustainability",
  ]
  const icon = [icon0, icon1, icon2, icon3, icon4]
  const StyledArrow = styled.div`
    background-image: linear-gradient(to right, #c33764, #1d2671);
    height: 8vh;
    color: white;
    display: inline-block;
    position: relative;
    padding: 1vh 0 1vh 8%;
    &::after {
      color: #1d2671;
      border-left: 5vh solid;
      border-top: 5vh solid transparent;
      border-bottom: 5vh solid transparent;
      display: inline-block;
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
    }
  `
  const StyledIcon = styled.img`
    width: 5vh;
    height: 5vh;
    margin: 1vh 2vw;
    display: inline-block;
    vertical-align: middle;
  `
  const StyledH4 = styled.h4`
    display: inline-block;
    width: 60%;
    margin: 1%;
    vertical-align: middle;
    @media (max-width: 750px) {
      font-size: 0.8em;
    }
  `
  const StyledDiv = styled.div`
    width: 80%;
    margin: 2% auto;
  `
  const StyledAnchor = styled.a`
    color: #451559;
    &:hover {
      text-decoration: none;
      font-style: normal;
    }
  `
  const StyledLine = styled.p`
    font-style: italic;
    font-weight: bold;
  `
  const dir_arrows = st.map((s, i) => (
    <StyledDiv>
      <StyledArrow key={i}>
        <StyledIcon src={icon[i]} alt="" />
        <StyledH4>{s}</StyledH4>
      </StyledArrow>
    </StyledDiv>
  ))
  return (
    <div>
      <StyledHeading t={"Strategic Directions"} />
      <StyledLine>
        Read detailed Strategic Plan{" "}
        <StyledAnchor href={pdf} target="_blank" rel="noopener">
          here
        </StyledAnchor>
      </StyledLine>

      {dir_arrows}
    </div>
  )
}
export default Strategic
