import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  border-top: #aaa solid 1px;
  height: 7rem;
`

export default function Footer() {

  return (
    <Container>
      <nav>
        <h2>LOGO</h2>
      </nav>
    </Container>
  )
}
