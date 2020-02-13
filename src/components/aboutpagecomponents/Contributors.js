import React from "react"
import StyledHeading from "../utils/StyledHeading"
import AboutPageFunders from "./AboutPageFunders"
import styled from "styled-components"
import Sponsors from "./Sponsors"
import CashDonations from "./CashDonations"
import InKindDonations from "./InKindDonations"
const Contributors = () => {
  const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 3vw;
    @media (max-width: 750px) {
      grid-template-columns: auto;
    }
  `
  const LeftDiv = styled.div`
    grid-column: 1 / span 1;
    @media (max-width: 750px) {
      grid-column: auto;
    }
  `
  const RightDiv = styled.div`
    grid-column: 2 / span 1;
    @media (max-width: 750px) {
      grid-column: auto;
    }
  `
  return (
    <div>
      <StyledHeading t="Contributors" />
      <p>
        Thank you to all of our funders! Without you believing in our work, we
        could not have done the work.
      </p>
      <StyledGrid>
        <LeftDiv>
          <AboutPageFunders />
          <InKindDonations />
          <CashDonations />
        </LeftDiv>
        <RightDiv>
          <Sponsors />
        </RightDiv>
      </StyledGrid>
    </div>
  )
}
export default Contributors
