import React from "react"
import styled from "styled-components"
import ImageSlideShow from "../utils/ImageSlideShow"
import Thanks from "./Thanks"
import HedaingAndPara from "../utils/HeadingAndPara"
import slide1 from "../../images/slideshow1.jpg"
import slide2 from "../../images/slideshow2.jpg"
import slide3 from "../../images/slideshow3.jpg"
import slide4 from "../../images/slideshow4.jpg"
import slide0 from "../../images/slideshow0.jpg"
const LeftSection = () => {
  const ia = [slide0, slide1, slide2, slide3, slide4]
  const StyledSection = styled.section`
    background-color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 1%;
    @media (max-width: 1024px) and (min-width: 750px) {
      padding-bottom: 70%;
    }
  `
  const StyledIntro = styled.div`
    display: block;
    margin: auto;
    text-align: left;
    @media (max-width: 750px) {
      display: inline-block;
      width: 70%;
      vertical-align: middle;
    }
    @media (max-width: 525px) {
      font-size: 0.8em;
    }
  `

  return (
    <StyledSection>
      <StyledIntro>
        <HedaingAndPara
          h="Who we are"
          p="
          Founded by a handful of Muslim women in 2010, Coalition of Muslim
          Women of KW (CMW) is a federally registered not for profit
          organization with the mandate to empower Muslim women and girls to be
          leaders and change makers. CMW provides opportunities for personal and
          professional growth, and leadership and skills development for Muslim
          women while addressing issues of racism, discrimination and
          Islamophobia through advocacy, activism, and bridge building. CMW
          facilitates Muslim women’s active participation and engagement in
          civic and democratic life, tirelessly working towards building a
          society where Muslim women are valued, engaged, empowered and
          recognized as leaders."
        />
      </StyledIntro>
      <ImageSlideShow imgArray={ia}></ImageSlideShow>
      <Thanks />
    </StyledSection>
  )
}
export default LeftSection
