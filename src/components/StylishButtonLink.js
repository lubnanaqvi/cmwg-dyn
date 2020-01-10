import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const StylishButtonLink = ({
  isAnchor,
  bgcolor,
  txtcolor,
  pad,
  linkto,
  btntext,
}) => {
  const st = `
    background-color:${bgcolor};
    color:${txtcolor};
    padding:${pad};
    margin:2%;
    display:inline-block;
    text-decoration:none;
    &:hover{
        background-color:black;
        color:white;
    }
    `
  const StyledComponent = isAnchor
    ? styled.a`
        ${st}
      `
    : styled(Link)`
        ${st}
      `
  return isAnchor ? (
    <StyledComponent href={linkto}>{btntext}</StyledComponent>
  ) : (
    <StyledComponent to={linkto}>{btntext}</StyledComponent>
  )
}
export default StylishButtonLink
