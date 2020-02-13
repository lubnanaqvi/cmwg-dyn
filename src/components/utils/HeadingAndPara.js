import React from "react"
import styled from "styled-components"
import StyledHeading from "./StyledHeading"
import StyledPara from "../utils/StyledPara"
const HeadingAndPara = ({ h, p }) => {
  const StyledDiv = styled.div`
    margin: 1% 0 2% 0;
  `
  return (
    <StyledDiv>
      <StyledHeading t={h} />
      <StyledPara t={p} />
    </StyledDiv>
  )
}
export default HeadingAndPara
