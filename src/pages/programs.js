import React from "react"
import styled from "styled-components"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TiledDiv from "../components/utils/TiledDiv"
import Styled80Div from "../components/utils/Styled80Div"
import NavPanel from "../components/programpagecomponents/NavPanel"
import programpages from "../json/programs.json"
import "./index.css"
const Programs = () => {
  const StyledAnchor = styled.a`
    margin: 1%;
  `
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  return (
    <Layout>
      <SEO title="Programs" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <NavPanel items={programpages} />
          <StyledPara>
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
            where our office is also located. We develop programming based on
            the identified needs of Muslim women with the aim to empower Muslim
            women and girls to be leaders and change makers by providing
            training and opportunities for personal and professional growth, and
            leadership and skills development. We also offer ongoing programming
            with the aim to build bridges of understanding with the larger
            community. Our bridge building activities are designed to bring
            change at systemic and societal level about the perceptions of
            Muslim women, their faith, and their communities, promoting equity,
            inclusion and multiculturalism. We are very thankful to our funders,
            community partners, and volunteers whose support enables us to offer
            our innovative programming.
          </StyledPara>
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}

export default Programs
