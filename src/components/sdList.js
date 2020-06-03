import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "../components/button"

const BorderSection = styled.section`
  margin: 0;
  width: 50%;
  height: 100vh
  display: flex;
  flex-direction: column;
  border-right: 0;
  @media (max-width: 800px) {
    width: 100vw;
    height: auto;
  }
`

const PaddingSection = styled.section`
  padding: 2rem;
  width: auto;
  height: auto;
`

const Course = styled.h1`
  margin-bottom: 2rem;
`

const ButtonContainer = styled.div`
  width: fit-content;
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
          <ButtonContainer>
            <Link to={node.fields.slug} key={node.id}>
              <Button>{node.frontmatter.name}</Button>
            </Link>
          </ButtonContainer>
        ))}
      </PaddingSection>
    </BorderSection>
  )
}
