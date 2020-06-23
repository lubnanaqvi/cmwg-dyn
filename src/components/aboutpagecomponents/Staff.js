import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledStaff from "./StyledStaff"
const Staff = () => {
  const [openedStaff, setOpenedStaff] = useState(-1)
  const StyledDiv = styled.div`
    background-image: linear-gradient(to top left, #73aaaf, teal);
    position: relative;
    width: 95%;
    margin: auto;
    box-sizing: border-box;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  `
  const staff_list = (
    <StaticQuery
      query={graphql`
        {
          allContentfulStaff {
            edges {
              node {
                email
                phone
                name
                contentfulid
                id
                title
                desc {
                  desc
                }
                pic {
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
        const sorted = data.allContentfulStaff.edges.sort(
          (a, b) => a.node.contentfulid - b.node.contentfulid
        )
        return sorted.map((d, i) => (
          <StyledStaff
            key={i}
            details={d.node}
            openStaffId={openedStaff}
            handleClick={e => setOpenedStaff(e.target.id)}
          />
        ))
      }}
    ></StaticQuery>
  )
  return <StyledDiv>{staff_list}</StyledDiv>
}
export default Staff
