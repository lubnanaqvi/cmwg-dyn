import React, { useState } from "react"
import styled from "styled-components"
import DisplayArea from "./DisplayArea"

const NavPanel = () => {
  const [displayId, setDisplayId] = useState("0")
  const handleClick = e => {
    setDisplayId(e.currentTarget.id)
  }
  const StyledDiv = styled.div`
    text-align: center;
  `
  const StyledBtn = styled.div`
    background-image: linear-gradient(#73aaaf, #204033);
    padding: 1%;
    margin: 0 1% 1% 0;
    color: white;
    text-decoration: none;
    display: inline-block;
    font-size: 0.9em;
    &:hover {
      background-color: #531d35;
      background-image: none;
      cursor: pointer;
    }
  `
  const sec_array = [
    "History/Background",
    "Activities",
    "Hate Crimes",
    "Education/Training",
    "Give30",
    "Blood Donation",
    "Quebec Mosque Shooting",
    "Funders",
    "Partners",
  ]
  const link_list = sec_array.map((s, i) => (
    <StyledBtn key={i} onClick={handleClick} id={i}>
      {s}
    </StyledBtn>
  ))
  return (
    <div>
      <StyledDiv>{link_list}</StyledDiv>
      <DisplayArea showId={displayId} />
    </div>
  )
}
export default NavPanel
