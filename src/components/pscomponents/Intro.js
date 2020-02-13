import React from "react"
import styled from "styled-components"

const Intro = () => {
  const StyledDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    padding: 5%;
  `
  const StyledAnchor = styled.a`
    margin: 1%;
    font-weight: bold;
  `
  return (
    <StyledDiv>
      <p>
        CMW offers regular and one time / special programs and services for
        Muslim women, as well as to the larger community in Waterloo Region.
        Most of our programming takes place at
        <StyledAnchor
          href="https://www.facswaterloo.org/familycentre"
          target="_blank"
          rel="noopener"
        >
          The Family Centre
        </StyledAnchor>
        where our office is also located. We develop programming based on the
        identified needs of Muslim women with the aim to empower Muslim women
        and girls to be leaders and change makers by providing training and
        opportunities for personal and professional growth, and leadership and
        skills development. We also offer ongoing programming with the aim to
        build bridges of understanding with the larger community. Our bridge
        building activities are designed to bring change at systemic and
        societal level about the perceptions of Muslim women, their faith, and
        their communities, promoting equity, inclusion and multiculturalism. We
        are very thankful to our funders, community partners, and volunteers
        whose support enables us to offer our innovative programming.
      </p>
    </StyledDiv>
  )
}
export default Intro
