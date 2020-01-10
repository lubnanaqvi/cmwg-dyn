import React from "react";
import styled from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import TiledDiv from "../TiledDiv";
const MainContent = () => {
  const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    width: 80%;
    margin: auto;
    @media (max-width: 1024px) {
      width: 95%;
    }
    @media (max-width: 750px) {
      grid-template-columns: auto;
    }
  `;
  return (
    <TiledDiv>
      <StyledGrid>
        <LeftSection />
        <RightSection />
      </StyledGrid>
    </TiledDiv>
  );
};
export default MainContent;
