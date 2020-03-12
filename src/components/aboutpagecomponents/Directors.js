import React, { useState } from "react"
import styled from "styled-components"
import bod from "../../json/directorsdesc.json"
import StyledDirector from "./StyledDirector"

const Directors = () => {
  const [openDir, setOpenDir] = useState(-1)

  const ContainerDiv = styled.div`
    display: grid;
    width: 90%;
    margin: auto;
    grid-gap: 10px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  `
  const dirs_list = bod.map((d, i) => {
    return (
      <StyledDirector
        key={i}
        bod={d}
        src={require(`../../images/${d.pic}`)}
        handleClick={e => setOpenDir(e.target.id)}
        openDirID={openDir}
      />
    )
  })
  return <ContainerDiv>{dirs_list}</ContainerDiv>
}
export default Directors
