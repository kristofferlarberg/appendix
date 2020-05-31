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

const Title = styled.section`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: auto
  padding: 0;
  margin: 0;
`

const Content = styled.section`
  width: calc(80vw - 14rem);
  padding: 0;
  height: auto;
  margin: 0 6rem;
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
        <Title>
          <h3>{page.frontmatter.name}</h3>
          <h4>{page.frontmatter.title}</h4>
          <h4>{page.frontmatter.email}</h4>
          <LastLink>{page.frontmatter.website}</LastLink>
        </Title>
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
