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
          Documentation of the graduation projects from students at the Interior
          Architecture course at Konstfack, University of Arts, Crafts and
          Design.
        </Text>
        <Button>Enter</Button>
      </TextBox>
    </Container>
  )
}
