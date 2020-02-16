import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import TiledDiv from "../../components/utils/TiledDiv"
import Hero from "../../components/utils/Hero"
import SEO from "../../components/seo"
import StyledHeading from "../../components/utils/StyledHeading"
import Styled80Div from "../../components/utils/Styled80Div"
import coe from "../../json/communityoutreach.json"
import ProgramCard from "../../components/programpagecomponents/ProgramCard"
import NavPanel from "../../components/programpagecomponents/NavPanel"
import programpages from "../../json/programs.json"
const CommunityOutreach = () => {
  const [openedCardID, setOpenedCardID] = useState(-1)
  const handleClick = e => {
    setOpenedCardID(e.target.id)
  }
  const cardList = coe.map((c, i) => (
    <ProgramCard
      key={i}
      item={c}
      openedCard={openedCardID}
      clickHandler={handleClick}
    />
  ))
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  return (
    <Layout>
      <SEO title="Programs - Community Outreach Events" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <NavPanel items={programpages} />
          <StyledHeading t="Community Outreach Events" />
          <StyledPara>
            Since its inception in 2010, the Coalition of Muslim Women of KW has
            presented an outstanding, enjoyable and free community event each
            year for the general public and Muslim women to enhance
            communication and foster understanding with the larger community, to
            provide a venue for artistic and cultural expression for Muslim
            women, to counter negative stereotypes about Muslim women, and to
            strive towards our vision of a just and harmonious community where
            Muslim women are valued, engaged, empowered and recognized as
            leaders.. For the first six years (2010-2016), these yearly events
            were presented with a different theme every year at the Kitchener
            City Hall. Since 2017, CMW has presented a large Ramadan iftaar
            event every year, inviting the larger community to experience the
            diverse culinary and cultural traditions of Ramadan from around the
            world.
          </StyledPara>
          <StyledPara>
            Below are the highlights of our annual community outreach events.
            Please check our <Link to="/events">Events</Link> page for
            information about our upcoming events.
          </StyledPara>
          {cardList}
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default CommunityOutreach
