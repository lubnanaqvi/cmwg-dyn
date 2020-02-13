import React from "react"
import styled from "styled-components"
const StyledPara = ({ t }) => {
  const S_para = styled.p`
    margin: 0;
    padding: 0;
    line-height: 1.4em;
  `
  return <S_para>{t}</S_para>
}
export default StyledPara
