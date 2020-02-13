import React, { useState } from "react"
import styled from "styled-components"
import dir0 from "../../images/dir0.jpg"
import dir1 from "../../images/dir1.jpg"
import dir2 from "../../images/dir2.jpg"
import dir3 from "../../images/dir3.jpg"
import bod from "../../json/directorsdesc.json"
import StyledDirector from "./StyledDirector"

const Directors = () => {
  const bod_pics = [dir0, dir1, dir2, dir3]
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
  const dirs_list = bod_pics.map((p, i) => {
    return (
      <StyledDirector
        key={i}
        bod={bod[i]}
        src={p}
        handleClick={e => setOpenDir(e.target.id)}
        openDirID={openDir}
      />
    )
  })
  return <ContainerDiv>{dirs_list}</ContainerDiv>
}
export default Directors
