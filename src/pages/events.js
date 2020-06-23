import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TiledDiv from "../components/utils/TiledDiv"
import styled from "styled-components"
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
  //const eventsList = events.map((e, i) => <EventCard event={e} key={i} />)
  return (
    <Layout>
      <SEO title="Events" />
      <TiledDiv>
        <Hero heroID={7} />
        <StyledDiv>
          <StaticQuery
            query={graphql`
              {
                allContentfulEvents {
                  edges {
                    node {
                      cardId
                      link
                      linktext
                      whenAndWhere
                      name
                      details {
                        details
                      }
                      pic {
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allContentfulEvents.edges.map((d, i) => {
                const e = d.node
                return <EventCard event={e} key={i} />
              })
            }
          ></StaticQuery>
        </StyledDiv>
      </TiledDiv>
    </Layout>
  )
}

export default Events
