import React from "react";
import styled from "styled-components";
import flogo1 from "../../images/funderlogo1.png";

const Funders = () => {
  const StyledDiv = styled.div``;
  const StyledImg = styled.img`
    display: inline-block;
    width: 20%;
    margin: 2%;
    vertical-align: middle;
  `;
  const logo_array = [flogo1, flogo1, flogo1, flogo1];
  const logolist = logo_array.map((l, i) => {
    return <StyledImg key={i} src={l}></StyledImg>;
  });
  return <StyledDiv>{logolist}</StyledDiv>;
};
export default Funders;
