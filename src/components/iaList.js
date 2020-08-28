import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

import Button from "../components/button"

const BorderSection = styled.section`
  margin: 0;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #aaa;
  @media (max-width: 800px) {
    width: 100vw;
    height: auto;
    border-right: 0;
  }
`

const PaddingSection = styled.section`
  padding: 2rem;
  width: auto;
  height: auto;
    @media (max-width: 800px) {
    width: auto;
    height: auto;
    padding: 1rem;
  }
`

const Course = styled.h1`
  margin-bottom: 2rem;
`

const ButtonContainer = styled.div`
  width: fit-content;
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

          return (
            <ButtonContainer key={node.id}>
              <Link to={slugWithClass}>
                <Button>{node.frontmatter.name}</Button>
              </Link>
            </ButtonContainer>
          )
        })}
      </PaddingSection>
    </BorderSection>
  )
}
