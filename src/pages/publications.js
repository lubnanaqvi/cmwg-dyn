import React from "react"
import styled from "styled-components"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledSmallHeading from "../components/utils/StyledSmallHeading"
import TiledDiv from "../components/utils/TiledDiv"
import rep3 from "../pdf/2017ar.pdf"
import rep2 from "../pdf/2018ar.pdf"
import rep1 from "../pdf/2019ar.pdf"
import islamophobia from "../pdf/islamophobia.pdf"
import quebec from "../pdf/quebec.pdf"
import hatecrimes from "../pdf/hatecrimes.pdf"
import muslimah from "../pdf/muslimah.pdf"
import empexp from "../pdf/empexp.pdf"
import grassroots from "../pdf/grassroots.pdf"
import pdficon from "../images/pdf-files.png"
import pic2 from "../images/hatecrimes.png"
import pic3 from "../images/islamophobia.png"
import pic4 from "../images/quebec.png"
import pic5 from "../images/grassroots.png"
import pic6 from "../images/muslimah.jpg"
import arpic17 from "../images/ar2017.png"
import arpic18 from "../images/ar2018.png"
import arpic19 from "../images/ar2019.png"
import "./index.css"
const PublicationsAndReports = () => {
  const StyledDiv = styled.div`
    width: 80%;
    margin: auto;
    padding: 2%;
    background-image: linear-gradient(to right bottom, teal, #73aaaf);
    color: white;
  `
  const StyledGrid = styled.div`
    display: grid;
    grid-gap: 2vw;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  `
  const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    margin: 5%;
    padding: 1%;
    border: solid 1px #ccc;
    color: #eee;
    text-align: center;
    transition: border-color 0.2s ease-in;
    &:focus,
    &:hover,
    &:active {
      border-color: white;
      color: white;
    }
  `
  const StyledImg = styled.img`
    width: 100px;
    display: block;
    margin: 3% auto;
  `
  const pub_pics = [pic3, pic4, pic2, pic6, pdficon, pic5]
  const pub_arr = [
    "Report - Islamophobia - WEB",
    "Response to Quebec City Mosque Shooting Project report (2017)",
    "Hate Crimes Project Report (2014)",
    "The Muslimah Project-Final Report",
    "Employment Experiences of Muslim Women in Waterloo Region",
    "Grassroots Organizations and Member Impact (Case Study-CMW)",
  ]
  const pdf = [islamophobia, quebec, hatecrimes, muslimah, empexp, grassroots]
  const pub_list = pdf.map((p, i) => (
    <StyledLink key={i} href={p} target="_blank" rel="noopener">
      <StyledImg src={pub_pics[i]} alt="" />
      {pub_arr[i]}
    </StyledLink>
  ))
  return (
    <Layout>
      <SEO title="Publications & Reports" />
      <TiledDiv>
        <Hero heroID={6} />
        <StyledDiv>
          <StyledSmallHeading t="Annual Reports" />
          <StyledGrid>
            <StyledLink href={rep1} target="_blank" rel="noopener">
              <StyledImg src={arpic19} alt="" />
              Annual Report for the Year 2019
            </StyledLink>
            <StyledLink href={rep2} target="_blank" rel="noopener">
              <StyledImg src={arpic18} alt="" />
              Annual Report for the Year 2018
            </StyledLink>
            <StyledLink href={rep3} target="_blank" rel="noopener">
              <StyledImg src={arpic17} alt="" />
              Annual Report for the Year 2017
            </StyledLink>
          </StyledGrid>
          <StyledSmallHeading t="Publications" />
          <StyledGrid>{pub_list}</StyledGrid>
        </StyledDiv>
      </TiledDiv>
    </Layout>
  )
}
export default PublicationsAndReports
