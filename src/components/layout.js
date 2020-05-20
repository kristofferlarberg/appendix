import React from "react"
import Header from "./header"

import styled from "styled-components"

const Container = styled.main`
  margin: 3rem auto;
  width: calc(100vw - 4rem);
  background-color: grey;
  padding: 1rem 2rem;
`

const Layout = ({ children }) => (
  <>
    <Header></Header>
    <Container>{children}</Container>
  </>
)

export default Layout
