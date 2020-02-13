import React from "react"
import StyledSmallHeading from "../utils/StyledSmallHeading"
import sponsors from "../../json/sponsors.json"
import styled from "styled-components"
const Sponsors = () => {
  // const { gold, silver, bronze, others } = sponsors
  // const gold_list = gold.map((g, i) => <li key={i}>{g}</li>)
  // const silver_list = silver.map((s, i) => <li key={i}>{s}</li>)
  // const bronze_list = bronze.map((b, i) => <li key={i}>{b}</li>)
  // const others_list = others.join(", ")
  const StyledDiv = styled.div``
  const StyledList = styled.ul`
    margin-top: 1%;
  `
  const StyledH4 = styled.h4`
    margin: 0;
    padding: 2% 0 0 0;
  `
  const heading_list = [
    "Platinum / Gold",
    "Silver",
    "Bronze",
    "Thank you to the following businesses for their cash and in-kind support! ",
  ]
  const sponsors_list = Object.keys(sponsors).map((cat, i) => {
    const s_list = sponsors[cat].map((s, j) => <li key={j}>{s}</li>)
    return (
      <div key={i}>
        <StyledH4>{heading_list[i]}</StyledH4>
        <StyledList>{s_list}</StyledList>
      </div>
    )
  })
  return (
    <StyledDiv>
      <StyledSmallHeading t="Sponsors" />
      {sponsors_list}
    </StyledDiv>
  )
}
export default Sponsors
/*
const s={
  gold:["abc","def","ghi"],
  silver:["DDD"],
  bronze:["eee"]
}
const sponsors=Object.keys(s).map((cat,i)=>{
  const s_list=s[cat].map((sponsor,i)=><li key={i}>{sponsor}</li>);
  console.log(s_list)
  return <div> <h4 key={i}>{cat}</h4><ul>{s_list}</ul></div>
})*/
