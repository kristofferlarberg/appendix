import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Article = styled.article`
  margin: 2rem;
  padding: 0;
  height: 100vh;
`

const Section = styled.section`
  display: flex;
  width: calc(100vw - 6rem);
  height: 100vh;
`

const Title = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 20vw;
  padding: 0;
  margin: 0;
`

const Descr = styled(Section)`
  width: 60vw;
  padding: 0;
  margin: 0;
  height: 100vh;
`

const ImgSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 4rem 0 0 0;
`

const Figure = styled.figure`
  width: calc(90vw - 4rem);
  height: auto;
  margin: 0;
`

const LastLink = styled.h4`
  margin: 0;
`

export default function Page({ data }) {
  const page = data.markdownRemark
  return (
    <Layout>
      <SEO title={page.frontmatter.title} description={page.excerpt} />
      <Article>
        <Section>
          <Title>
            <h3>{page.frontmatter.name}</h3>
            <h4>{page.frontmatter.title}</h4>
            <h4>{page.frontmatter.email}</h4>
            <LastLink>{page.frontmatter.website}</LastLink>
          </Title>
          <Descr>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </Descr>
        </Section>
        <ImgSection>
          <Figure></Figure>
          <Figure></Figure>
        </ImgSection>
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        name
        email
        website
      }
      excerpt
    }
  }
`
