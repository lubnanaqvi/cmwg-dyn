import React from "react"
import styled from "styled-components"

const ImageSlideShow = ({ imgArray }) => {
  const StyledDiv = styled.div`
    display: block;
    width: 90%;
    margin: auto;
    @media (max-width: 750px) {
      display: inline-block;
      width: 25%;
      vertical-align: middle;
    }
  `
  const images_list = imgArray.map((img, i) => <img src={img} alt="" key={i} />)
  return <StyledDiv className="fadeIn">{images_list}</StyledDiv>
}
export default ImageSlideShow
