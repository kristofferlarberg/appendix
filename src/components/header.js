import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import ButtonDiv from "./button"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

const Title = styled.h1`
  color: black;
  
  &:hover {
    color: black;
  }
`

const AboutButton = styled(ButtonDiv)`
  width: 50px;
  height: 50px;
  padding: 0;
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
        <Link to="./about">
          <AboutButton>...</AboutButton>
        </Link>
      </nav>
    </Container>
  )
}
