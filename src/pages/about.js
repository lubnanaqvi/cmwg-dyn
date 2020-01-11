import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero"
import TiledDiv from "../components/TiledDiv"
import OurOrg from "../components/aboutpagecomponents/OurOrg"
import Layout from "../components/layout"
const About = () => {
  const StyledGrid = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    padding: 1% 2%;
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    width: 80%;
    margin: auto;
    @media (max-width: 1024px) {
      width: 95%;
    }
    @media (max-width: 750px) {
      grid-template-columns: auto;
    }
  `

  return (
    <Layout>
      <TiledDiv>
        <Hero heroID={7} />
        <StyledGrid>
          <OurOrg />
        </StyledGrid>
      </TiledDiv>
    </Layout>
  )
}

export default About
