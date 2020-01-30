import React from "react"
import styled from "styled-components"

const Activities = ({ id }) => {
  const StyledDiv = styled.div`
    background-color: black;
    color: white;
    margin: 5% 0;
    padding: 1%;
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
      <StyledH2 className="cookiefont">Activities</StyledH2>
      <StyledPara>
        Youth support, public education, research, community service projects
        such as Give 30 Waterloo Region and Blood donation drives
      </StyledPara>
    </StyledDiv>
  )
}
export default Activities
