import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.png"
import { Link } from "gatsby"
const Header = () => {
  const StyledImg = styled.img`
    padding: 1% 2%;
    width: 15%;
    display: inline-block;
    vertical-align: middle;
    @media (max-width: 750px) {
      width: 30%;
    }
  `
  const StyledH1 = styled.h1`
    padding: 1% 2%;
    width: 50%;
    display: inline-block;
    vertical-align: middle;
    font-size: 2em;
    text-align: center;
    @media (max-width: 750px) {
      display: none;
    }
  `
  return (
    <header>
      <Link to="/">
        <StyledImg src={logo} alt="Coalition of Muslim Women Logo" />
      </Link>
      <StyledH1 className="cookiefont">Muslim Women making change!</StyledH1>
    </header>
  )
}
export default Header
