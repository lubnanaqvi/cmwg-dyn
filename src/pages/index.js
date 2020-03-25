import React from "react"
import "./index.css"
import Layout from "../components/layout"
import Main from "../components/homepagecomponents/Main"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Main />
    </Layout>
  )
}
export default IndexPage
