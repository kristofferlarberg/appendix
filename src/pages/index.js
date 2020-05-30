import React from "react"
import Layout from "../components/layout"
import IaList from "../components/iaList"
import SdList from "../components/sdList"

const Home = ({ data }) => (
  <Layout>
    <IaList></IaList>
    <SdList></SdList>
  </Layout>
)

export default Home
