import React from "react"
import Layout from "../components/layout"
import IaList from "../components/iaList"
import SdList from "../components/sdList"
import SEO from "../components/seo"

const Home = ({ data }) => (
  <Layout>
    <SEO title="Index" />  
    <IaList></IaList>
    <SdList></SdList>
  </Layout>
)

export default Home
