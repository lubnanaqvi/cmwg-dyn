import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Events = () => (
  <Layout>
    <SEO title="Events" />
    <Hero heroID={6} />
    <h1>Events!</h1>
  </Layout>
)

export default Events
