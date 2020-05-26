import React from "react"
import Layout from "../components/layout"
import NameList from "../components/nameList"
import Button from "../components/button"
import { Link, graphql } from "gatsby"

const Home = ({ data }) => (
  <Layout>
    <NameList>
      <h2>Interior Architecture and Furniture Design (BA)</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug}>
          <Button>{node.frontmatter.name}</Button>
        </Link>
      ))}
    </NameList>
    <NameList>
      <h2>Spatial Design (MA)</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug}>
          <Button>{node.frontmatter.name}</Button>
        </Link>
      ))}
    </NameList>
  </Layout>
)

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___name], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
