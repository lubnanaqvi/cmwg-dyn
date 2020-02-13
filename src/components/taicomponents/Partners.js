import React from "react"
import styled from "styled-components"
import StyledHeading from "../utils/StyledHeading"

const Partners = ({ id }) => {
  const StyledDiv = styled.div``

  const partners_array = [
    "Community Justice Initiative",
    "Family and Children’s Services of Waterloo Region",
    "Interfaith Grand River",
    "Hate Crime and Extremism Unit-Ontario",
    "Immigration Partnership Waterloo Region",
    "Waterloo Region Crime Prevention Council",
    "Waterloo Region Police Service",
  ]
  const partnersList = partners_array.map((p, i) => <li key={i}>{p}</li>)
  return (
    <StyledDiv id={id}>
      <StyledHeading t="Partners" />
      {partnersList}
    </StyledDiv>
  )
}
export default Partners
