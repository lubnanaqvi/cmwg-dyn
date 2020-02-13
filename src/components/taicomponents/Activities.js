import React from "react"
import styled from "styled-components"
import StyledHeading from "../utils/StyledHeading"
import StyledPara from "../utils/StyledPara"

const Activities = ({ id }) => {
  const StyledDiv = styled.div`
    background-color: #531d35;
    color: white;
    margin: 5% 0;
    padding: 1%;
  `

  return (
    <StyledDiv id={id}>
      <StyledHeading t="Activities" />
      <StyledPara
        t="Youth support, public education, research, community service projects
        such as Give 30 Waterloo Region and Blood donation drives"
      />
    </StyledDiv>
  )
}
export default Activities
