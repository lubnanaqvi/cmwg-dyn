import React from "react"
import History from "./History"
import Activities from "./Activities"
import HateCrimes from "./HateCrimes"
import Education from "./Education"
import Give30 from "./Give30"
import BloodDonation from "./BloodDonation"
import QMosqueShooting from "./QMosqueShooting"
import Funders from "./Funders"
import Partners from "./Partners"

const DisplayArea = ({ showId }) => {
  switch (showId) {
    case "0":
      return <History />
    case "1":
      return <Activities />
    case "2":
      return <HateCrimes />
    case "3":
      return <Education />
    case "4":
      return <Give30 />
    case "5":
      return <BloodDonation />
    case "6":
      return <QMosqueShooting />
    case "7":
      return <Funders />
    case "8":
      return <Partners />
    default:
      return <h2>{showId}</h2>
  }
}
export default DisplayArea
