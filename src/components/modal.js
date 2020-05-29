import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Welcome from "../images/enter.jpg"
import Button from "./button"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  border: #aaa solid 1px;
  margin: 2rem 0;
  z-index: 100;
  position: absolute;
  background: white;
  border: #aaa solid 1px;
  width: 60vw;
  height: auto;
  font-size: 1rem;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  border: 0;
  padding: 2rem;
`

const ExhibitionImage = styled.img`
  width: 50%;
  
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
      <h1>{data.site.siteMetadata.title}</h1>
      <ImageContainer>
        <ExhibitionImage src={Welcome} alt="Exhibition image"></ExhibitionImage>
        <ExhibitionImage src={Welcome} alt="Exhibition image"></ExhibitionImage>
      </ImageContainer>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <Button>Enter</Button>
    </Container>
  )
}
