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
const SpeakersBureau = () => {
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  return (
    <Layout>
      <SEO title="Programs - Speaker's Bureau" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <StyledHeading t="Speaker's Bureau" />
          <NavPanel items={programpages} />
          <StyledPara>
            The CMW’s Speakers’ Bureau is comprised of a dynamic group of
            eloquent women speakers who, through their community presentations
            on various topics relating to Muslim women, fulfil the CMW’s mission
            to “enhance communication and foster understanding between Muslim
            women and the larger community”. Through their outreach work, the
            passionate speakers utilize opportunities for personal and
            professional growth, as they strengthen and fine-tune their speaking
            skills. The Speakers’ Bureau is also a wonderful way for CMW to
            spread accurate knowledge about Muslim women, their lives and their
            experiences, within our community.
          </StyledPara>
          <StyledPara>
            To enquire about booking a CMW speaker from our Speakers’ Bureau for
            your group or event, please email cmw.info@cmw-kw.org
          </StyledPara>
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default SpeakersBureau
