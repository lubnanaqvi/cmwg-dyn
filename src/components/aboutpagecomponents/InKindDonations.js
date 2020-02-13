import React from "react"
import StyledSmallHeading from "../utils/StyledSmallHeading"
import inkind_list from "../../json/inkind.json"
import styled from "styled-components"
const CashDonations = () => {
  // const idonors = inkind_list.map((c, i) => <li key={i}>{c}</li>)
  const StyledDiv = styled.div``
  const StyledPara = styled.p`
    background-image: linear-gradient(to left bottom, #8e2949, #1d2671);
    color: white;
    padding: 2%;
    line-height: 1.4em;
  `
  const idonors = inkind_list.join(", ")
  return (
    <StyledDiv>
      <StyledSmallHeading t="In-kind Donations" />
      <StyledPara>{idonors}</StyledPara>
    </StyledDiv>
  )
}
export default CashDonations
