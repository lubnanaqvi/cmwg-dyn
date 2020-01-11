import React from "react"
import History from "./History"
import Strategic from "./Strategic"
import Directors from "./Directors"
import Staff from "./Staff"
import Partners from "./Partners"
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
      return <Partners />
    default:
      return <div>Default</div>
  }
}
export default DisplayArea
