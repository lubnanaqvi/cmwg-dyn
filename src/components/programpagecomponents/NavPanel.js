import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const NavPanel = ({ items }) => {
  const StyledDiv = styled.div``
  const StyledLink = styled(Link)`
    background-image: linear-gradient(#73aaaf, #204033);
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 1.5%;
    margin: 1%;
    font-size: 0.9em;
    &:focus,
    &:hover,
    &:active {
      background-image: none;
      background-color: #444;
      cursor: pointer;
    }
  `
  const btnList = items.map((item, i) => (
    <StyledLink to={item.link}>{item.name}</StyledLink>
  ))
  return <StyledDiv>{btnList}</StyledDiv>
}
export default NavPanel
