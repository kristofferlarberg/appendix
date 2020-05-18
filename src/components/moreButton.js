import React from "react"
import styled from "styled-components"

const Container = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: white;
  border: #aaaaaa solid 1px;
  border-radius: 100px;
`

const Dot = styled.div`
  width: 4px;
  height: 4px;
  margin: 0.3rem;
  border: black solid 1px;
  border-radius: 100px;
  background-color: black;
`

const MoreButton = ({ children }) => (
  <Container>
    <Dot></Dot>
    <Dot></Dot>
    <Dot></Dot>
  </Container>
)

export default MoreButton
