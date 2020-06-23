import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import bod from "../../json/directorsdesc.json"
import StyledDirector from "./StyledDirector"

const Directors = () => {
  const [openDir, setOpenDir] = useState(-1)
  const ContainerDiv = styled.div`
    display: grid;
    width: 90%;
    margin: auto;
    grid-gap: 10px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  `
  const dirs_list = (
    <StaticQuery
      query={graphql`
        {
          allContentfulDirectors {
            edges {
              node {
                contentfulid
                name
                id
                pic {
                  file {
                    url
                  }
                }
                title
                desc {
                  desc
                }
              }
            }
          }
        }
      `}
      render={data => {
        const sorted = data.allContentfulDirectors.edges.sort(
          (a, b) => a.node.contentfulid - b.node.contentfulid
        )
        return sorted.map((d, i) => (
          <StyledDirector
            key={i}
            bod={d.node}
            openDirID={openDir}
            handleClick={e => setOpenDir(e.target.id)}
          />
        ))
      }}
    ></StaticQuery>
  )
  return <ContainerDiv>{dirs_list}</ContainerDiv>
}
export default Directors
