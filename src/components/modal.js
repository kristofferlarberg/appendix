import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Exhibition1 from "../images/exhibition1.jpg"
import Exhibition2 from "../images/exhibition2.jpg"
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
  background: ${props =>
    props.image === 1 ? `url(${Exhibition1})` : `url(${Exhibition2})`};
  background-size: 3000px auto;
  background-repeat: no-repeat;
  background-position: center;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35vw;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  @media (max-width: 800px) {
    width: auto;
  }
`

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

const Text = styled.p`
  margin-bottom: 2rem;
`

const Background = [Exhibition1, Exhibition2]

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

  const [image, setImage] = useState()

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * Background.length)
    if (randomNumber === 1) setImage(randomNumber)
    if (randomNumber === 0) setImage(randomNumber)
    return
  }, [])

  return (
    <Container {...props} image={image}>
      <TextBox>
        <Header>{data.site.siteMetadata.title}</Header>
        <Text>
          MA Spatial Design<br></br>
          BA Interior Architecture & Furniture Design<br></br>
          Konstfack 2020
        </Text>
        <Button>Enter the Exhibition</Button>
      </TextBox>
    </Container>
  )
}
