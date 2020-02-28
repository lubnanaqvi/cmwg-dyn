import React, { useState } from "react"
import styled from "styled-components"
import OurOrgBtn from "./OurOrgBtn"
import DisplayArea from "./DisplayArea"
const OurOrg = () => {
  const [displayId, setDisplayId] = useState(0)
  const StyledDiv = styled.div`
    text-align: center;
  `
  const org_array = [
    "Vision, Mission, Values",
    "History",
    "Strategic Directions",
    "Board of Directors",
    "Staff",
    "Collaborators",
    "Contributors",
  ]
  const btnList = org_array.map((orgbtn, i) => {
    return (
      <OurOrgBtn
        btntext={orgbtn}
        key={i}
        showGradient={displayId !== i}
        handleClick={e => {
          setDisplayId(i)
        }}
      />
    )
  })
  return (
    <div>
      <StyledDiv>{btnList}</StyledDiv>
      <DisplayArea showId={displayId} />
    </div>
  )
}
export default OurOrg
