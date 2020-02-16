import React, { useState } from "react"
import styled from "styled-components"
import Hero from "../../components/utils/Hero"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StyledHeading from "../../components/utils/StyledHeading"
import TiledDiv from "../../components/utils/TiledDiv"
import Styled80Div from "../../components/utils/Styled80Div"
import arts from "../../json/artsprogramming.json"
import ProgramCard from "../../components/programpagecomponents/ProgramCard"
import NavPanel from "../../components/programpagecomponents/NavPanel"
import programpages from "../../json/programs.json"
const ArtsProgramming = () => {
  const [openedCardID, setOpenedCardID] = useState(-1)
  const handleClick = e => {
    setOpenedCardID(e.target.id)
  }
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  const cardList = arts.map((a, i) => (
    <ProgramCard
      key={i}
      item={a}
      clickHandler={handleClick}
      openedCard={openedCardID}
    />
  ))
  return (
    <Layout>
      <SEO title="Programs - Arts Programming" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <NavPanel items={programpages} />
          <StyledHeading t="Arts Programming" />
          <StyledPara>
            CMW recognized the power of art as a universal language that speaks
            across cultures early on as we started to strive to build
            understanding between Muslim women and the larger community to
            address the prevalent stereotypes about Muslim women. Noticing the
            number of newcomer and young Muslim women artists in KW, looking for
            connections to the larger art and culture scene, CMW launched art
            programming in 2015 under “Illuminate Arts KW” project. CMW has
            since continued to offer art programming and connections and
            networking opportunities to Muslim women and girls artists.
            THEMUSEUM in downtown Kitchener and Kitchener Waterloo Art Gallery
            have been generous collaborators in CMW’s art programming
            endeavours. THEMUSEUM has hosted three annual art exhibits since
            2016 along with a number of other artistic collaborations.
            Kitchener-Waterloo Art Gallery primarily housed the Illuminate Arts
            Project in 2015 – 2016 and has hosted several calligraphy workshops
            since.
          </StyledPara>
          {cardList}
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}

export default ArtsProgramming
