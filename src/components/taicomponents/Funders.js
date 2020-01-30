import React from "react"
import styled from "styled-components"
import FunderLogo from "./FunderLogo"
import flogo1 from "../../images/funderlogo3.jpg"
import flogo2 from "../../images/funderlogo6.png"
import flogo3 from "../../images/funderlogo7.png"
const Funders = ({ id }) => {
  const StyledDiv = styled.div``
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    margin: 0;
    padding: 0;
  `
  const funders_array = [
    { img: flogo1, expand: "30%", alt: "Inspirit Logo" },
    { img: flogo2, expand: "20%", alt: "KW Community Foundation Logo" },
    { img: flogo3, expand: "20%", alt: "RBC Logo" },
  ]
  const fundersList = funders_array.map((f, i) => (
    <FunderLogo key={i} pic={f.img} expand={f.expand} alt={f.alt} />
  ))
  return (
    <StyledDiv id={id}>
      <StyledH2 className="cookiefont">Funders</StyledH2>
      {fundersList}
    </StyledDiv>
  )
}
export default Funders
