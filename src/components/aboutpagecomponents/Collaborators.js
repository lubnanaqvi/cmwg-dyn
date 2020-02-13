import React from "react"
import StyledHeading from "../utils/StyledHeading"
import colab_list from "../../json/aboutcollab.json"
const Collaborators = () => {
  const colabs = colab_list.map((c, i) => <li key={i}>{c}</li>)
  return (
    <div>
      <StyledHeading t="Collaborators" />
      <p>Thank you to our partners and collaborators!</p>
      <ul>{colabs}</ul>
    </div>
  )
}
export default Collaborators
