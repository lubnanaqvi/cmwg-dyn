import React, { useState } from "react"
import styled from "styled-components"
import StyledStaff from "./StyledStaff"
import staff0 from "../../images/fauzia.jpeg"
import staff1 from "../../images/uzma.jpeg"
import staff2 from "../../images/sarah.jpg"
import staff3 from "../../images/wazhma.jpeg"
import staff4 from "../../images/wisam.jpg"
import staff5 from "../../images/asha.jpg"
import staff6 from "../../images/joudi.jpg"
import staff7 from "../../images/madiha.jpg"

import staffdetails from "../../json/staff.json"
const Staff = () => {
  const [openedStaff, setOpenedStaff] = useState(-1)
  const staff_pics = [
    staff0,
    staff1,
    staff2,
    staff3,
    staff4,
    staff5,
    staff6,
    staff7,
  ]
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

  const staff_list = staff_pics.map((s, i) => {
    return (
      <StyledStaff
        src={s}
        key={i}
        details={staffdetails[i]}
        openStaffId={openedStaff}
        handleClick={e => setOpenedStaff(e.target.id)}
      />
    )
  })
  return <StyledDiv>{staff_list}</StyledDiv>
}
export default Staff
