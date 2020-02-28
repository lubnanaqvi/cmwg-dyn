import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const NavPanel = ({ items }) => {
  const StyledDiv = styled.div`
    text-align: center;
  `
  const StyledLink = styled(Link)`
    background-image: linear-gradient(#73aaaf, #204033);
    display: inline-block;
    text-decoration: none;
    color: white;
    margin: 0 1% 1% 0;
    padding: 1%;
    font-size: 0.9em;
    &:focus,
    &:hover,
    &:active {
      background-image: none;
      background-color: #444;
      cursor: pointer;
    }
    @media (max-width: 750px) {
      margin-bottom: 5%;
    }
  `
  const btnList = items.map((item, i) => (
    <StyledLink to={item.link} key={i}>
      {item.name}
    </StyledLink>
  ))
  return <StyledDiv>{btnList}</StyledDiv>
}
export default NavPanel
