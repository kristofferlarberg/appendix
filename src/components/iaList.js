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
  @media (max-width: 800px) {
    width: 100vw;
    height: auto;
    border-right: 0;
    border-bottom: 1px solid #aaa;
  }
`

const PaddingSection = styled.section`
  padding: 2rem;
  height: 100vh;
`

const Course = styled.h1`
margin-bottom: 2rem;
`

export default function IaList(props) {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___name], order: ASC }
          filter: {
            frontmatter: {
              classOf: { eq: "interior-architecture-and-furniture-design" }
            }
          }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                name
                classOf
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
        <Course>Interior Architecture and Furniture Design (BA)</Course>
        {data.allMdx.edges.map(({ node }) => {
          const slugWithClass = `/${node.frontmatter.classOf}${node.fields.slug}`

          return(
            <Link to={slugWithClass} key={node.id}>
              <Button>{node.frontmatter.name}</Button>
            </Link>
          )
        })}
      </PaddingSection>
    </BorderSection>
  )
}
