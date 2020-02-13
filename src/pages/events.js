import React from "react"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TiledDiv from "../components/utils/TiledDiv"
import styled from "styled-components"
import events from "../json/events.json"
import EventCard from "../components/eventspagecomponents/EventCard"
import "./index.css"
const Events = () => {
  const StyledDiv = styled.div`
    width: 80%;
    margin: auto;
    padding: 2% 0;
    background-color: rgba(255, 255, 255, 0.7);
    @media (max-width: 1024px) {
      width: 100%;
    }
  `
  const eventsList = events.map((e, i) => <EventCard event={e} key={i} />)
  return (
    <Layout>
      <SEO title="Events" />
      <TiledDiv>
        <Hero heroID={7} />
        <StyledDiv>{eventsList}</StyledDiv>
      </TiledDiv>
    </Layout>
  )
}

export default Events
