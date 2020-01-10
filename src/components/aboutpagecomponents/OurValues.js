import React, { useState } from "react"
import styled from "styled-components"
import values_array from "../../json/ourvalues.json"
import StyledValue from "./StyledValue"
import values_layout from "../../json/valueslayout.json"
const OurValues = () => {
  const [openedValue, setOpenedValue] = useState(-1)
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    padding: 0;
    margin: 0;
  `
  //background-image: linear-gradient(to left bottom, #b29caf, #42275a);
  const StyledGrid = styled.div`
    position: relative;
    display: grid;
    margin: auto;
    padding: 2%;
    background-image: linear-gradient(to left bottom, #ffb75e, #ed8f03);
    color: white;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 3.5vw);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }
  `

  const handleClick = e => {
    setOpenedValue(e.target.id)
  }
  const valuesList = values_array.map((v, i) => {
    return (
      <StyledValue
        key={i}
        valueObj={v}
        handleClick={handleClick}
        openedValue={openedValue}
        gridPoints={values_layout[i]}
      />
    )
  })

  return (
    <div>
      <StyledH2 className="cookiefont">Values</StyledH2>
      <StyledGrid>{valuesList}</StyledGrid>
    </div>
  )
}
export default OurValues
