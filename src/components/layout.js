import React from "react"
import Header from "./header"

import styled from "styled-components"

const Container = styled.main`
  display: flex;
  width: 100vw;
  margin: 0;
  padding: 0;
`

const Layout = ({ children }) => (
  <>
    <Header></Header>
    <Container>{children}</Container>
  </>
)

export default Layout
