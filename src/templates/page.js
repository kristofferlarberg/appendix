import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Article = styled.article`
  display: flex;
  justify-content: center;
  margin: 2rem 4rem;
  padding: 0;
  width: calc(100vw - 8rem);
  height: auto;
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
  margin: 0 auto 0 4rem;
  padding: 0;
  @media (max-width: 800px) {
    margin: 2rem 0 0 0;
    width: calc(100vw - 2rem);
  }
`

const Title = styled.h3`
  font-weight: 300;
  margin-top: 1rem;
`

const Mail = styled(Title)`
  margin-top: 1rem;
`

const Website = styled(Title)`
  margin: 0;
`

export default function Page({ data }) {
  const page = data.markdownRemark
  return (
    <Layout>
      <Article>
        <Header>
          <h2>{page.frontmatter.name}</h2>
          <Title>{page.frontmatter.title}</Title>
          <Mail>{page.frontmatter.email}</Mail>
          <Website>
            <a href={page.frontmatter.website}>{page.frontmatter.website}</a>
          </Website>
        </Header>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Content>
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
