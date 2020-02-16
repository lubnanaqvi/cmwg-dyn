import React from "react"
import styled from "styled-components"
import Hero from "../../components/utils/Hero"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StyledHeading from "../../components/utils/StyledHeading"
import TiledDiv from "../../components/utils/TiledDiv"
import Styled80Div from "../../components/utils/Styled80Div"
import NavPanel from "../../components/programpagecomponents/NavPanel"
import programpages from "../../json/programs.json"
const TeaNTales = () => {
  const img_arr = [
    "awardpic16.jpg",
    "oktoberfest.jpg",
    "slideshow0.jpg",
    "slideshow1.jpg",
    "awardpic19.jpg",
  ]
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  const StyledDiv = styled.div`
    width: 85%;
    display: inline-block;
    vertical-align: top;
    margin: 1%;
    @media (max-width: 750px) {
      width: 100%;
      display: block;
    }
  `
  const StyledImgStrip = styled.div`
    width: 10%;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 750px) {
      width: 100%;
      display: block;
    }
  `
  const StyledImg = styled.img`
    width: 100%;
    @media (max-width: 750px) {
      width: 17%;
      display: inline-block;
      margin: 1%;
    }
  `
  const StyledOl = styled.ol``
  const imgList = img_arr.map((img, i) => (
    <StyledImg key={i} src={require("../../images/" + img)} alt="" />
  ))
  return (
    <Layout>
      <SEO title="Programs - Tea And Tales" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <NavPanel items={programpages} />
          <StyledImgStrip>{imgList}</StyledImgStrip>
          <StyledDiv>
            <StyledHeading t="Tea and Tales with Muslim Women" />
            <StyledPara>
              Tea and Tales with Muslim Women, is an interactive and educational
              travelling show which employs art, entertainment and dialogue to
              build bridges of understanding between Muslim women and the larger
              community.
            </StyledPara>
            <StyledPara>
              “Tea and Tales with Muslim Women” offers three ways of engaging
              and educating the audience:
            </StyledPara>
            <StyledOl type="a">
              <li>
                An interactive presentation introducing the audience to some
                basic facts about Muslim women including information about hijab
                (headscarf)
              </li>
              <li>
                Culture Café: Muslim women from diverse backgrounds who have
                made KW their home host candid and meaningful conversations over
                a cup of traditional coffee of tea and treats from their country
                / culture of origin. Swap stories, ask questions, be part of
                each other’s’ life journeys
              </li>
              <li>
                Windows to the Glorious Past: Learn about accomplished Muslim
                women from distant and more recent history who have been
                celebrated as change agents in their respective societies
                through theatrical enactments
              </li>
            </StyledOl>
            <StyledPara>
              To book a Tea and Tales with Muslim Women show, please email
              cmw.info@cmw-kw.org
            </StyledPara>
          </StyledDiv>
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default TeaNTales
