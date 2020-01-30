import React from "react"
import styled from "styled-components"
const HateCrimes = ({ id }) => {
  const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2vw;
    @media (max-width: 750px) {
      grid-template-columns: auto;
    }
  `
  const StyledContact = styled.div`
    background-color: #a0d39d;
    padding: 2%;
  `
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    margin: 0;
    padding: 0;
  `
  const StyledLink = styled.a`
    display: inline-block;
    color: #531d35;
    font-weight: bolder;
    margin: 1% 0;
    &:hover {
      font-style: italic;
    }
  `
  return (
    <div id={id}>
      <StyledH2 className="cookiefont">
        Reporting Hate Crimes / Incidents
      </StyledH2>
      <StyledDiv>
        <p>
          CMW is actively looking for resources to build its capacity to address
          Islamophobia and hate incidents at interpersonal, systemic and
          societal levels. Our priority is to have a hate incident documentation
          process in place in 2020.
          <br />
          Documenting hate incidents helps us collect valuable data, over time.
          Reliable data provides good evidence. This data is then used to
          develop programs and services, as well as for advocacy.
        </p>

        <StyledContact>
          Sarah Shafiq Project Coordinator – Together Against Islamophobia
          <br />
          Coalition of Muslim Women of KW
          <br />
          <StyledLink href="tel:226-989-0060">Cell:</StyledLink> 226-989-0060
          <br />
          <StyledLink href="mailto:sarah.shafiq@cmw-kw.org">
            sarah.shafiq@cmw-kw.org
          </StyledLink>
        </StyledContact>
      </StyledDiv>
    </div>
  )
}
export default HateCrimes
