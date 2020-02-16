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
import Styled80Div from "../components/utils/Styled80Div"
const Services = () => {
  const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    display: block;
    width: 80%;
    @media (max-width: 750px) {
      width: 95%;
    }
  `
  const StyledGhost = styled.div`
    padding: 1%;
    display: inline-block;
    border: solid 1px #ccc;
    margin: 1%;
    &:hover {
      border-color: #383838;
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
        <Styled80Div>
          <StyledHeading t="For Muslim Women" />
          {servicesMlist}
          <StyledHeading t="For General Public" />
          {servicesGlist}
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default Services
