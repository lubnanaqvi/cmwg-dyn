import React from "react"
import styled from "styled-components"

const NavToggle = ({ isNavOpen, handleClick }) => {
  const StyledButton = styled.div`
    background-color: #ffc72c;
    color: #383838;
    display: inline-block;
    width: 10vw;
    padding: 10px 0;
    text-align: center;
    font-weight: bold;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10;
    &:hover {
      background-color: #87189d;
      color: white;
      cursor: pointer;
      transition: background-color linear 0.5s;
    }
    @media (max-width: 1024px) {
      width: 20vw;
      top: 0;
      right: 0;
    }
  `

  return (
    <StyledButton onClick={handleClick}>
      {isNavOpen ? "Close Menu" : "Menu"}
    </StyledButton>
  )
}
export default NavToggle
