import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import whatsnew from "../../json/whatsnew.json"
import StylishButtonLink from "../utils/StylishButtonLink"

const WhatsNew = () => {
  const wnlist = whatsnew.map((w, i) => {
    let seemore = ""
    if (w.link && w.link[0])
      seemore = (
        <StylishButtonLink
          isAnchor={w.link[0] !== "/"}
          linkto={w.link}
          btntext={w.linktext}
          bgcolor="#ffc72c"
          txtcolor="black"
          pad="3%"
        />
      )
    const StyledPara = styled.div`
      padding: 0;
      margin: 0 1% 5% 1%;
      & > p {
        margin: 0;
        padding: 0;
      }
    `
    const StyledInnerDiv = styled.div`
      margin: 0 1% 1% 1%;
      @media (max-width: 1200px) and (min-width: 750px) {
        font-size: 0.8em;
      }
    `
    const StyledPic = styled.img`
      width: 150px;
      height: 150px;
      border: solid 1px #aaa;
      @media (max-width: 1024px) and (min-width: 750px) {
        width: 100px;
        height: 100px;
      }
    `
    const StyledPicDiv = styled.div`
      overflow: hidden;
    `
    const StyledWNItem = styled.div`
      display: grid;
      grid-template-columns: 155px auto;
      grid-template-rows: auto auto;
      margin-bottom: 10%;
      @media (max-width: 1024px) and (min-width: 750px) {
        grid-template-columns: 105px auto;
      }
    `
    const StyledH3 = styled.h3`
      grid-column: 1 / span 2;
      margin: 3%;
      border-bottom: solid 1px black;
    `
    const truncated_description =
      w.desc.length > 100 ? w.desc.substr(0, 100) + "..." : w.desc
    const parsed_desc = truncated_description.split("\n")
    const desc_with_newlines = parsed_desc.map((d, i) => <p key={i}>{d}</p>)
    return (
      <StyledWNItem key={i}>
        <StyledH3>{w.heading}</StyledH3>
        <StyledPicDiv>
          <StyledPic
            src={w.pic ? require(`../../images/${w.pic}`) : ""}
            alt=""
          />
        </StyledPicDiv>
        <StyledInnerDiv>
          <StyledPara>{desc_with_newlines}</StyledPara>
          {seemore}
        </StyledInnerDiv>
      </StyledWNItem>
    )
  })
  return (
    <div>
      {wnlist}
      <StaticQuery
        query={graphql`
          {
            allContentfulWhatsNew {
              edges {
                node {
                  heading
                  description {
                    description
                  }
                  link
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          console.log(data)
          return ""
        }}
      ></StaticQuery>
    </div>
  )
}
export default WhatsNew
