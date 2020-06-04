import React, { useState } from "react"
import Nav from "./nav"
import Footer from "./footer"
import Modal from "./modal"

import styled from "styled-components"

const Container = styled.main`
  display: flex;
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const windowGlobal =
  typeof window !== "undefined"
    ? window
    : { localStorage: { getItem: () => false, setItem: () => true } }

const Layout = ({ children }) => {
  const [firstVisit, toggleFirstVisit] = useState(
    JSON.parse(windowGlobal.localStorage.getItem("firstVisit") || true)
  )

  const handleHideModal = (toggle = false) => {
    toggleFirstVisit(toggle)
    windowGlobal.localStorage.setItem("firstVisit", toggle)
  }

  return (
    <>
      {firstVisit && <Modal onClick={() => handleHideModal(false)}></Modal>}
      <Nav></Nav>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  )
}

export default Layout
