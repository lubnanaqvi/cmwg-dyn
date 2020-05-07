import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import whatsnew from "../../json/whatsnew.json"
import StylishButtonLink from "../utils/StylishButtonLink"

const WhatsNew = () => {
  const wnlist = whatsnew.map((w, i) => {
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
    // const truncated_description =
    //   w.desc.length > 100 ? w.desc.substr(0, 100) + "..." : w.desc
    // const parsed_desc = truncated_description.split("\n")
    // const desc_with_newlines = parsed_desc.map((d, i) => <p key={i}>{d}</p>)
    return (
      <StaticQuery
        key={i}
        query={graphql`
          {
            allContentfulWhatsNew {
              edges {
                node {
                  heading
                  link
                  description {
                    description
                    id
                  }
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
          const myNode = data.allContentfulWhatsNew.edges[i].node
          const dscrp = myNode.description.description
          const t_dscrp =
            dscrp.length > 100 ? dscrp.substr(0, 100) + "..." : dscrp
          const p_dscrp = t_dscrp.split("\n")
          const dscrp_with_newlines = p_dscrp.map((d, i) => <p key={i}>{d}</p>)
          const seemore =
            myNode.link && myNode.link[0] ? (
              <StylishButtonLink
                isAnchor={myNode.link[0] !== "/"}
                linkto={myNode.link}
                btntext="More"
                bgcolor="#ffc72c"
                txtcolor="black"
                pad="3%"
              />
            ) : (
              ""
            )
          return (
            <StyledWNItem>
              <StyledH3>
                {data.allContentfulWhatsNew.edges[i].node.heading}
              </StyledH3>
              <StyledPicDiv>
                <StyledPic src={myNode.image.file.url || ""} alt="" />
              </StyledPicDiv>
              <StyledInnerDiv>
                <StyledPara>{dscrp_with_newlines}</StyledPara>
                {seemore}
              </StyledInnerDiv>
            </StyledWNItem>
          )
        }}
      />
    )
  })
  return <div>{wnlist}</div>
}
export default WhatsNew
