import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "../components/button"

const BorderSection = styled.section`
  margin: 0;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border-right: 1px solid #aaa;
`

const PaddingSection = styled.section`
  padding: 2rem;
  height: 100vh;
`

const Course = styled.h1`
  margin-bottom: 2rem;
`

export default function SdList(props) {
  const data = useStaticQuery(
    graphql` 
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___name], order: ASC }
          filter: {
            frontmatter: {
              tags: { in: "Spatial Design" }
            }
          }
        ) {
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
  )

  return (
    <BorderSection>
      <PaddingSection>
        <Course>Spatial Design (MA)</Course>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id}>
            <Button>{node.frontmatter.name}</Button>
          </Link>
        ))}
      </PaddingSection>
    </BorderSection>
  )
}
