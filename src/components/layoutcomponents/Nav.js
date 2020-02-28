import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import pages from "../../json/pageinfo.json"

const Nav = ({ showMe }) => {
  const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    display: ${showMe ? "block" : "none"};
  `
  const Styledul = styled.ul`
    list-style-type: none;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 15% 0 0 0;
    margin: 0;
    height: 80vh;
    width: 20vw;
    @media (max-width: 1024px) {
      width: 50vw;
      height: 100vh;
    }
    @media (max-width: 750px) {
      width: 100vw;
    }
  `
  const Styledli = styled.li`
    padding: 4% 3%;
    width: 90%;
    margin: auto;
    transition: 0.5s linear;
    &:focus,
    &:hover,
    &:active {
      border-bottom: solid 1px white;
    }
  `
  const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: white;
  `
  const pageList = pages.map((p, i) => (
    <Styledli key={i}>
      <StyledLink to={p.link}>{p.pagename}</StyledLink>
    </Styledli>
  ))
  return (
    <StyledNav>
      <Styledul>{pageList}</Styledul>
    </StyledNav>
  )
}
export default Nav
