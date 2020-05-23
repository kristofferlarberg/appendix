import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"


const Article = styled.article`
  margin: 0;
  padding: 0;
`

const Section = styled.section`
  display: flex;
`

const Title = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 25vw;
  padding: 0;
  margin: 0;
`

const Descr = styled(Section)`
  width: 75vw;
  padding: 0;
  margin: 0 12rem;
`

const About = () => (
  <Layout>
    <Article>
      <Section>
        <Title>
          <h3>About this site</h3>
          {/* Denna del villkoras senare för att skapa About-sidan */}
{/*           <h3>Understanding the Importance of Tools</h3>
 */}        </Title>
        <Descr>
          <p>
            How do we create space? The most common tools used during the
            process are: pen, paper, ruler and computer. How do these tools
            control the outcome and how do they contribute to good communication
            in the different steps of a process? For example: What would be the
            outcome if we used our bodies as a tool to make architecture, and
            how would we communicate our ideas and processes? As an interior
            architect, I want to get closer to the user of spaces by paying
            attention to the distances relation between existing tools and the
            needs of the user. In my gradution project, I question our existing
            tools in both the creative phase and the communication phase.
          </p>
        </Descr>
      </Section>
      {/* Denna del villkoras senare för att skapa About-sidan */}
{/*       <ImgSection>
        <Figure>
          <Preview src={img1}></Preview>
        </Figure>
        <Figure>
          <Preview src={img2}></Preview>
        </Figure>
      </ImgSection> */}
    </Article>
  </Layout>
)

export default About
