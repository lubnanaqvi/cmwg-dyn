import React, { useState } from "react"
import styled from "styled-components"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TiledDiv from "../components/utils/TiledDiv"
import eventspic from "../images/events.jpg"
import jobspic from "../images/job.jpg"
import speakerpic from "../images/speaker.jpg"
import mailingpic from "../images/mailing.jpg"
import donatepic from "../images/donate.jpg"
import volunteerpic from "../images/volunteer.jpg"
import GetInvolvedPicCard from "../components/getinvolvedpagecomponents/GetInvolvedPicCard"
import g from "../json/getinvolved.json"
import "./index.css"
const GetInvolved = () => {
  const [openID, setOpenID] = useState(-1)
  const handleClick = e => {
    setOpenID(e.target.id)
  }
  const MainContent = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 1% 0;
    width: 80%;
    margin: auto;
  `
  const StyledGrid = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px 200px;
    grid-gap: 10px;
    padding: 2%;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 200px);
    }
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 200px);
    }
  `
  const pics = [
    jobspic,
    donatepic,
    eventspic,
    volunteerpic,
    speakerpic,
    mailingpic,
  ]
  const pic_list = g.map((y, i) => (
    <GetInvolvedPicCard
      gi={y}
      key={i}
      img={pics[i]}
      clickHandler={handleClick}
      openid={openID}
    />
  ))
  return (
    <Layout>
      <SEO title="Get Involved" />
      <TiledDiv>
        <Hero heroID={9} />
        <MainContent>
          <StyledGrid>{pic_list}</StyledGrid>
        </MainContent>
      </TiledDiv>
    </Layout>
  )
}
export default GetInvolved
