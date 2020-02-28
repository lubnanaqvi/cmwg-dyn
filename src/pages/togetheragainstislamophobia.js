import React from "react"
import TiledDiv from "../components/utils/TiledDiv"
import Hero from "../components/utils/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavPanel from "../components/taicomponents/NavPanel"
import Styled80Div from "../components/utils/Styled80Div"
import "./index.css"

const TogetherAgainstIslamophobia = () => {
  return (
    <Layout>
      <SEO title="Together Against Islamophobia" />
      <TiledDiv>
        <Hero heroID={3} />
        <Styled80Div>
          <NavPanel />
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default TogetherAgainstIslamophobia
