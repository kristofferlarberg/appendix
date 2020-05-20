import React from "react"
import Layout from "../components/layout"
import NameList from "../components/nameList"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Section = styled.section`

`

const Home = () => (
  <Layout>
    <Container>
      <Section>
        <h2>Interior Architecture and Furniture Design</h2>
        <NameList></NameList>
      </Section>
      <Section>
        <h2>Spatial Design</h2>
        <NameList></NameList>
      </Section>
    </Container>
  </Layout>
)

export default Home
