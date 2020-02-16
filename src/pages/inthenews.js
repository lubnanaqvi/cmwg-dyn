import React from "react"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TiledDiv from "../components/utils/TiledDiv"
import styled from "styled-components"
import newsitems from "../json/inthenews.json"
import NewsCard from "../components/inthenewspagecomponents/NewsCard"
import "./index.css"
const InTheNews = () => {
  const StyledDiv = styled.div`
    width: 80%;
    margin: auto;
    padding: 2% 0;
    background-color: rgba(255, 255, 255, 0.7);
    @media (max-width: 1024px) {
      width: 100%;
    }
  `
  const StyledContainer = styled.div`
    padding: 1%;
  `
  const newsList = newsitems.map((n, i) => <NewsCard key={i} newsitem={n} />)
  return (
    <Layout>
      <SEO title="CMW in the News" />
      <TiledDiv>
        <Hero heroID={4} />
        <StyledDiv>
          <StyledContainer>{newsList}</StyledContainer>
        </StyledDiv>
      </TiledDiv>
    </Layout>
  )
}
export default InTheNews
