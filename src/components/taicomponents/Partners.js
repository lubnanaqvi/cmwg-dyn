import React from "react"
import styled from "styled-components"

const Partners = ({ id }) => {
  const StyledDiv = styled.div``
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    margin: 0;
    padding: 0;
  `
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
      <StyledH2 className="cookiefont">Partners</StyledH2>
      {partnersList}
    </StyledDiv>
  )
}
export default Partners
