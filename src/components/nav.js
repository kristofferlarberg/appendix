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
  text-align: left;
  width: 10rem;

  &:hover {
    color: black;
  }
`

const Ia = styled(Title)`
  color: black;
  text-align: center;
  width: 10rem;

  &:hover {
    color: black;
  }
`

const Year = styled(Title)`
  color: black;
  text-align: right;
  width: 10rem;

  &:hover {
    color: black;
  }
`

export default function Nav(props) {
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
    <Link to="/">
      <Container {...props}>
        <Title>{data.site.siteMetadata.title}</Title>
        <Ia>IA</Ia>
        <Year>2020</Year>
      </Container>
    </Link>
  )
}
