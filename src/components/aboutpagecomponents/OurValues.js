import React, { useState } from "react"
import styled from "styled-components"
import values_array from "../../json/ourvalues.json"
import StyledValue from "./StyledValue"
import values_layout from "../../json/valueslayout.json"
import ValueCard from "./ValueCard"
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
    margin: 0 auto;
    grid-gap: 1vw;
    color: white;
    grid-template-columns: repeat(8, 9vw);
    grid-template-rows: repeat(1, 9vw);
    @media (max-width: 1024px) {
      grid-gap: 3vw;
    }
    @media (max-width: 750px) {
      grid-template-columns: 20vw 20vw 20vw 20vw;
      grid-template-rows: repeat(2, 20vw);
    }
  `

  const handleClick = e => {
    if (e.target.id) setOpenedValue(e.target.id)
    else setOpenedValue(-1)
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
      <ValueCard openedValue={openedValue} handleClick={handleClick} />
    </div>
  )
}
export default OurValues
