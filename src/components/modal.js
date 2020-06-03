import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Welcome from "../images/exhibition.jpg"
import Button from "./button"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
  margin: 0;
  position: fixed;
  z-index: 100;
  background: url(${Welcome});
  background-size: 3000px auto;
  background-repeat: no-repeat;
  background-position: center;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60vw;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
`

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

const Text = styled.p`
  margin-bottom: 2rem;
`

export default function Modal(props) {
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
      <TextBox>
        <Header>{data.site.siteMetadata.title}</Header>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        <Button>Enter</Button>
      </TextBox>
    </Container>
  )
}
