import React, { useState } from "react";
import styled from "styled-components";
import OurOrgBtn from "./OurOrgBtn";
import DisplayArea from "./DIsplayArea";
const OurOrg = () => {
  const [displayId, setDisplayId] = useState(0);
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    padding: 0;
    margin: 0;
  `;
  const StyledDiv = styled.div`
    margin: 3%;
  `;
  const org_array = [
    "History",
    "Strategic Direction",
    "Board of Directors",
    "Staff",
    "Employment Opportunities",
    "Partners & Collaborators"
  ];
  const btnList = org_array.map((orgbtn, i) => {
    return (
      <OurOrgBtn
        btntext={orgbtn}
        key={i}
        bgcolor={displayId === i ? "black" : "#73aaaf"}
        handleClick={e => {
          setDisplayId(i);
        }}
      />
    );
  });
  return (
    <div>
      <StyledH2 className="cookiefont">Our Organization</StyledH2>
      <StyledDiv>{btnList}</StyledDiv>
      <DisplayArea showId={displayId} />
    </div>
  );
};
export default OurOrg;
