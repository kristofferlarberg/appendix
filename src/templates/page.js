import React from "react"
import { graphql } from "gatsby"
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
  width: 20vw;
  padding: 0;
  margin: 0;
`

const Descr = styled(Section)`
  width: calc(80vw - 28rem);
  padding: 0;
  margin: 0 12rem;
`

const ImgSection = styled(Section)`
  display: flex;
  padding: 0;
  margin: 4rem 0 0 0;
`

const Figure = styled.figure`
  width: 20rem;
  height: 20rem;
  margin: 0;
`

export default function Page({ data }) {
  const page = data.markdownRemark
  return (
    <Layout>
      <Article>
        <Section>
          <Title>
            <h3>{page.frontmatter.name}</h3>
            <h3>{page.frontmatter.title}</h3>
          </Title>
          <Descr>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </Descr>
        </Section>
        {/* Denna del villkoras senare för att skapa About-sidan */}
        <ImgSection>
          <Figure>{/* <Preview src={img1}></Preview> */}</Figure>
          <Figure>{/* <Preview src={img2}></Preview> */}</Figure>
        </ImgSection>
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        name
      }
      html
    }
  }
`
