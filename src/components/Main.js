import React from "react";
import MainContent from "./homepagecomponents/MainContent";
import Hero from "./Hero";
const Main = () => {
  return (
    <main>
      <Hero heroID={0} />
      <MainContent />
    </main>
  );
};
export default Main;
