import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic0 from "../images/awardpic16.jpg"
import pic1 from "../images/awardpic17.jpg"
import pic2 from "../images/awardpic18.jpg"
import pic3 from "../images/awardpic19.jpg"
import pdf1 from "../pdf/2018awards.pdf"
import pdf2 from "../pdf/2019awards.pdf"
import ImageSlideShow from "../components/ImageSlideShow"
import HeadingAndPara from "../components/HeadingAndPara"
import TiledDiv from "../components/TiledDiv"

const Awards = () => {
  const imgs = [pic0, pic1, pic2, pic3]
  const booklets = [pdf1, pdf2, pdf2, pdf1]
  const StyledGrid = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    display: grid;
    grid-template-columns: auto 250px;
    width: 80%;
    margin: auto;
    @media (max-width: 1024px) {
      width: 95%;
    }
    @media (max-width: 750px) {
      grid-template-columns: auto;
    }
  `
  const LeftSection = styled.div`
    padding: 2%;
    padding-bottom: 500px;
    @media (max-width: 750px) {
      padding-bottom: 2%;
    }
  `
  const StyledIntro = styled.div`
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
  const RightSection = styled.div`
    background-image: linear-gradient(to left, #02aab0, #00cdac);
    padding-bottom: 3%;
  `
  const BookletListDiv = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
    @media (max-width: 750px) {
      grid-template-columns: 100px 100px;
      width: 220px;
    }
  `
  const StyledH3 = styled.h3`
    font-size: 1.7em;
    color: white;
    text-align: center;
    @media (max-width: 750px) {
      grid-column: 1 / span 2;
    }
  `
  const BookletLink = styled.a`
    width: 150px;
    height: 150px;
    margin: auto;
    color: #eee;
    border: solid 1px #ccc;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    padding-top: 15%;
    font-size: 3em;
    text-align: center;
    &:hover {
      border: solid 1px white;
      color: white;
    }
    @media (max-width: 750px) {
      width: 100px;
      height: 100px;
      margin: 1%;
      padding-top: 5%;
      font-size: 2em;
    }
  `
  const booklet_list = booklets.map((b, i) => (
    <BookletLink href={b} key={i}>
      {2019 - i}
    </BookletLink>
  ))
  const intro = (
    <HeadingAndPara
      h="CMW Women Who Inspire Awards"
      p="Every March, in commemoration of International Women’s Day, the Coalition of Muslim Women of KW recognizes Muslim women leaders and change makers in our community by honouring them at the CMW Women Who Inspire Awards Recognition Dinner. In addition, “Friend of CMW” award is presented to an individual, group or organization to recognize their contributions towards building the organization and their support and mentorship for Muslim women in general. CMW long term volunteers are also recognized at 5 and 10 years marks. 
  Call for nominations is issued generally 4 months in advance of the Gala date, seeking nominations in the categories of Inspiring Leadership,, Community Service, Professional Excellence, Advocacy/Activism, Artistic Accomplishments and Outstanding Youth. An awards committee reviews the nominations in early January and select the winners. Please watch this website for news concerning our next CMW Women Who Inspire Awards Recognition Dinner! We hope that you will join us at this gala event!
  Do read about our esteemed award winners in “Get to know our Award Winners” section."
    />
  )
  return (
    <Layout>
      <SEO title="Awards" />
      <TiledDiv>
        <Hero heroID={4} />
        <StyledGrid>
          <LeftSection>
            <StyledIntro>{intro}</StyledIntro>
            <ImageSlideShow imgArray={imgs} />
          </LeftSection>
          <RightSection>
            <StyledH3 className="cookiefont">
              Get to know our Award Winners
            </StyledH3>
            <BookletListDiv>{booklet_list}</BookletListDiv>
          </RightSection>
        </StyledGrid>
      </TiledDiv>
    </Layout>
  )
}
export default Awards
