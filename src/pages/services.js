import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeading from "../components/utils/StyledHeading"
import TiledDiv from "../components/utils/TiledDiv"
import sm from "../json/servicesm.json"
import sg from "../json/servicesg.json"
import "./index.css"
const Services = () => {
  const StyledDiv = styled.div`
    width: 80%;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 2%;
  `
  const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    display: block;
  `
  const StyledGhost = styled.div`
    padding: 1%;
    display: inline-block;
    border: solid 1px transparent;
    &:hover {
      border-color: black;
    }
  `
  const servicesMlist = sm.map((s, i) => (
    <StyledLink key={i} to={s.link}>
      <StyledGhost>{s.text}</StyledGhost>
    </StyledLink>
  ))
  const servicesGlist = sg.map((s, i) => (
    <StyledLink key={i} to={s.link}>
      <StyledGhost>{s.text}</StyledGhost>
    </StyledLink>
  ))
  return (
    <Layout>
      <SEO title="Services" />
      <TiledDiv>
        <Hero heroID={2} />
        <StyledDiv>
          <StyledHeading t="For Muslim Women" />
          {servicesMlist}
          <StyledHeading t="For General Public" />
          {servicesGlist}
        </StyledDiv>
      </TiledDiv>
    </Layout>
  )
}
export default Services
