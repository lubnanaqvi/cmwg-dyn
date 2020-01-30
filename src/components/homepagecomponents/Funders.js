import React from "react"
import styled from "styled-components"
import flogo1 from "../../images/funderlogo1.png"
import flogo2 from "../../images/funderlogo2.jpg"
import flogo3 from "../../images/funderlogo3.jpg"
import flogo4 from "../../images/funderlogo4.jpg"
import flogo5 from "../../images/funderlogo5.png"
import flogo6 from "../../images/funderlogo6.png"
import flogo7 from "../../images/funderlogo7.png"
import FunderLogo from "./FunderLogo"
const Funders = () => {
  const StyledDiv = styled.div``

  const logo_array = [
    { img: flogo1, expand: "20%", alt: "Government of Canda Logo" },
    {
      img: flogo2,
      expand: "50%",
      alt: "Department of Women and Gender Eqaulity Logo",
    },
    { img: flogo3, expand: "50%", alt: "Inspirit Logo" },
    { img: flogo4, expand: "20%", alt: "City of Kitchener Logo" },
    { img: flogo5, expand: "20%", alt: "City of Waterloo Logo" },
    { img: flogo6, expand: "20%", alt: "KW Community Foundation Logo" },
    { img: flogo7, expand: "20%", alt: "RBC Logo" },
  ]
  const logolist = logo_array.map((l, i) => {
    return <FunderLogo key={i} pic={l.img} expand={l.expand} alt={l.alt} />
  })
  return <StyledDiv>{logolist}</StyledDiv>
}
export default Funders
