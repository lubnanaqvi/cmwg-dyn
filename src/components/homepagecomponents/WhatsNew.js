import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StylishButtonLink from "../utils/StylishButtonLink"
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
const WhatsNew = () => {
  return (
    <StaticQuery
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
                itemNumber
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
        const sortedEdges = data.allContentfulWhatsNew.edges.sort(
          (a, b) => a.node.itemNumber - b.node.itemNumber
        )
        const wnlist = sortedEdges.map((s, i) => {
          const myNode = s.node
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
            <StyledWNItem key={i}>
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
        })
        return <div>{wnlist} </div>
      }}
    />
  )
}
export default WhatsNew
