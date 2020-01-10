import React from "react";
import History from "./History";
import Strategic from "./Strategic";
import Directors from "./Directors";
import Staff from "./Staff";
import Employment from "./Employment";
import Partners from "./Partners";
const DisplayArea = ({ showId }) => {
  switch (showId) {
    case 0:
      return <History />;
    case 1:
      return <Strategic />;
    case 2:
      return <Directors />;
    case 3:
      return <Staff />;
    case 4:
      return <Employment />;
    case 5:
      return <Partners />;
    default:
      return <div>Default</div>;
  }
};
export default DisplayArea;
