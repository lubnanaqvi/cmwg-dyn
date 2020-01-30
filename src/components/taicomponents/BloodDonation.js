import React from "react"
import styled from "styled-components"
const BloodDonation = ({ id }) => {
  const StyledDiv = styled.div`
    margin: 5% 0;
  `
  const StyledSpan = styled.span`
    padding: 0;
    margin: 2% auto;
    text-decoration: underline;
    font-style: italic;
    display: block;
    text-align: center;
  `
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    margin: 0;
    padding: 0;
  `
  const StyledPara = styled.p`
    margin: 0;
    padding: 0;
    line-height: 1.4em;
  `
  return (
    <StyledDiv id={id}>
      <StyledH2 className="cookiefont">Blood Donation Campaign</StyledH2>
      <StyledPara>
        Coalition of Muslim Women of KW ran the first ever Muslim led blood
        donation drive in Waterloo Region in partnership with Canadian Blood
        Services (CBS) . Over 150 community members participated in the past
        three years. CMW has helped make connections for CBS and is confident
        that more organizations will take the lead to plan blood donation
        drives.
      </StyledPara>
      <StyledSpan>
        We have a number of bridge building activities for 2020. Stay tuned!
      </StyledSpan>
    </StyledDiv>
  )
}
export default BloodDonation
