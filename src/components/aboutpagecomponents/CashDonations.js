import React from "react"
import styled from "styled-components"
import StyledSmallHeading from "../utils/StyledSmallHeading"
import cash_list from "../../json/cash.json"
const CashDonations = () => {
  const StyledDiv = styled.div``
  const cdonors = cash_list.map((c, i) => <li key={i}>{c}</li>)
  return (
    <StyledDiv>
      <StyledSmallHeading t="Cash Donations" />
      <ul>{cdonors}</ul>
    </StyledDiv>
  )
}
export default CashDonations
