import React from "react"
import styled from "styled-components"
const SocialIcon = ({ hrefTo, pic, name, t }) => {
  const StyledImg = styled.img`
    width: 45px;
  `
  return (
    <a href={hrefTo} target={t}>
      <StyledImg src={pic} alt={name} />
    </a>
  )
}
export default SocialIcon
