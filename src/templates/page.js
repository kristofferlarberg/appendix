import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Article = styled.article`
  display: flex;
  margin: 2rem;
  padding: 0;
  width: auto;
  height: auto;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: auto
  padding: 0;
  margin: 0;
`

const Content = styled.section`
  width: calc(80vw - 14rem);
  max-width: calc(1400px - 14rem);
  height: auto;
  margin: 0 6rem;
  padding: 0;
`

const Title = styled.h3`
  font-weight: 300;
  margin-top: 1rem;
`

const Mail = styled(Title)`
  margin-top: 1rem;
`

const Link = styled(Title)`
  margin: 0;
`

export default function Page({ data }) {
  const page = data.markdownRemark
  return (
    <Layout>
      <SEO title={page.frontmatter.title} description={page.excerpt} />
      <Article>
        <Header>
          <h2>{page.frontmatter.name}</h2>
          <Title>{page.frontmatter.title}</Title>
          <Mail>{page.frontmatter.email}</Mail>
          <Link>{page.frontmatter.website}</Link>
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
