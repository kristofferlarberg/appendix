import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 4rem;
  border-bottom: #aaa solid 1px;
`

const Title = styled.h1`
  color: black;
  font-size: 1.7rem;

  &:hover {
    color: black;
  }
`

export default function Header(props) {
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
   
      <Container {...props}>
        <Link to="/">
          <Title>{data.site.siteMetadata.title}</Title>
        </Link>
        <h2>IA</h2>
        <h2>2020</h2>
      </Container>
  
  )
}
