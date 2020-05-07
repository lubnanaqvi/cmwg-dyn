import React from "react"
import History from "./History"
import Strategic from "./Strategic"
import Directors from "./Directors"
import Staff from "./Staff"
import Collaborators from "./Collaborators"
import Contributors from "./Contributors"
import VMV from "./VMV"
const DisplayArea = ({ showId }) => {
  switch (showId) {
    case 0:
      return <VMV />
    case 1:
      return <History />
    case 2:
      return <Strategic />
    case 3:
      return <Directors />
    case 4:
      return <Staff />
    case 5:
      return <Collaborators />
    case 6:
      return <Contributors />
    default:
      return <div>Default</div>
  }
}
export default DisplayArea
