import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: #aaa solid 1px;
`

const Title = styled.h1`
  color: black;
  font-size: 1.7rem;
  
  &:hover {
    color: black;
  }
`

export default function Header({children}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Container>
      <nav>
        <Link to="/">
          <Title>{data.site.siteMetadata.title}</Title>
        </Link>
      </nav>
      <nav>
        <h2>2020</h2>
      </nav>
    </Container>
  )
}
