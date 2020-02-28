import React from "react"
import styled from "styled-components"
import Hero from "../../components/utils/Hero"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StyledHeading from "../../components/utils/StyledHeading"
import TiledDiv from "../../components/utils/TiledDiv"
import Styled80Div from "../../components/utils/Styled80Div"
import htext from "../../json/huquq.json"
import NavPanel from "../../components/programpagecomponents/NavPanel"
import programpages from "../../json/programs.json"
const Huquq = () => {
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  const StyledImg = styled.img`
    float: right;
    width: 20%;
    max-width: 500px;
    margin: 1%;
    @media (max-width: 750px) {
      float: none;
      display: block;
      width: 70%;
      margin: auto;
    }
  `
  const paraList = htext.paragraphs.map((p, i) => (
    <StyledPara key={i}>{p}</StyledPara>
  ))
  const bulletList = htext.list.map((l, i) => <li key={i}>{l}</li>)
  return (
    <Layout>
      <SEO title="Programs - Huquq" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <NavPanel items={programpages} />
          <StyledHeading t="Huquq ~ Muslim Women’s Human Rights Education and Awareness Project" />
          <StyledImg
            src={require("../../images/huquq.png")}
            alt="Huquq Imagery"
          />
          {paraList}
          <ul>{bulletList}</ul>
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default Huquq
