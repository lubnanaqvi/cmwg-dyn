import React from "react"
import styled from "styled-components"
import OurValues from "./OurValues"
import Vision from "./Vision"
import Mission from "./Mission"
const VMV = () => {
  const InnerGrid = styled.div`
    display: grid;
    grid-template-columns: 40% auto;
    @media (max-width: 750px) {
      grid-template-columns: auto;
    }
  `
  return (
    <div>
      <InnerGrid>
        <Vision />
        <Mission />
      </InnerGrid>
      <OurValues />
    </div>
  )
}
export default VMV
