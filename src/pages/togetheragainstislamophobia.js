import React from "react"
import styled from "styled-components"
import TiledDiv from "../components/utils/TiledDiv"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavPanel from "../components/taicomponents/NavPanel"
import "./index.css"

const TogetherAgainstIslamophobia = () => {
  const StyledDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    width: 80%;
    margin: auto;
    padding: 2%;
  `

  return (
    <Layout>
      <SEO title="Together Against Islamophobia" />
      <TiledDiv>
        <Hero heroID={3} />
        <StyledDiv>
          <NavPanel />
        </StyledDiv>
      </TiledDiv>
    </Layout>
  )
}
export default TogetherAgainstIslamophobia
