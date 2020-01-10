import React from "react"
import styled from "styled-components"
export default ({ colr }) => styled.span`
  padding: 2%;
  background-color: ${colr};
  color: #aaa;
  margin-left: 80%;
  font-weight: normal;
  &:hover {
    border: solid 1px #383838;
    color: white;
    cursor: pointer;
  }
`
