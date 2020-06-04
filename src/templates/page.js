import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Article = styled.article`
  display: flex;
  justify-content: center;
  margin: 2rem 8rem;
  padding: 0;
  width: calc(100vw - 16rem);
  height: auto;
  min-height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 1rem;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: auto
  padding: 0;
  margin: 0 0 0 auto;
    @media (max-width: 800px) {
    width: calc(100vw - 2rem);
  }
`

const Content = styled.section`
  width: 75%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto 0 8rem;
  padding: 0;
  @media (max-width: 800px) {
    margin: 2rem 0 0 0;
    width: calc(100vw - 2rem);
  }

  img {
    margin: 2rem 0 0 0;
  }

  .gatsby-resp-image-figure img {
    margin: 0;
  }
`

const Title = styled.h3`
  font-weight: 300;
  margin-top: 1.5rem;
`

const Mail = styled(Title)`
  margin-top: 1.5rem;
`

const Website = styled(Title)`
  margin: 0;
`

export default function Page({ data }) {
  const page = data.mdx

  return (
    <Layout>
      <SEO
        title={page.frontmatter.name}
        description={page.frontmatter.description}
      />
      <Article>
        <Header>
          <h2>{page.frontmatter.name}</h2>
          <Title>{page.frontmatter.title}</Title>
          <Mail>
            <a href={`mailto:${page.frontmatter.email}`}>
              {page.frontmatter.email}
            </a>
          </Mail>
          <Website>
            <a href={page.frontmatter.website} target="_blank" rel="noreferrer">
              {page.frontmatter.website}
            </a>
          </Website>
        </Header>
        <Content>
          <MDXRenderer>{page.body}</MDXRenderer>
        </Content>
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        name
        email
        website
        description
      }
      excerpt
    }
  }
`
