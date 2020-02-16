import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import TiledDiv from "../../components/utils/TiledDiv"
import Hero from "../../components/utils/Hero"
import SEO from "../../components/seo"
import StyledHeading from "../../components/utils/StyledHeading"
import Styled80Div from "../../components/utils/Styled80Div"
import leadership from "../../json/leadershiptraining.json"
import ProgramCard from "../../components/programpagecomponents/ProgramCard"
import NavPanel from "../../components/programpagecomponents/NavPanel"
import programpages from "../../json/programs.json"
const LeadershipTrainging = () => {
  const [openedCardID, setOpenedCardID] = useState(-1)
  const handleClick = e => setOpenedCardID(e.target.id)
  const cardList = leadership.map((l, i) => (
    <ProgramCard
      key={i}
      item={l}
      clickHandler={handleClick}
      openedCard={openedCardID}
    />
  ))
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  return (
    <Layout>
      <SEO title="Programs - Leadership Training" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <NavPanel items={programpages} />
          <StyledHeading t="Leadership Training" />
          <StyledPara>
            Leadership development for Muslim women is fundamentally important
            to the Coalition of Muslim Women of KW. CMW’s vision for the future
            underlines the importance of leadership for Muslim women, as it
            envisages “a just and harmonious community where Muslim women are
            valued, engaged, empowered and recognized as leaders”.
          </StyledPara>
          <StyledPara>
            To facilitate and support leadership development, CMW offers regular
            leadership, communication and public speaking trainings.{" "}
          </StyledPara>
          {cardList}
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default LeadershipTrainging
