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

const Description = styled.section`
  display: none;
`

const windowGlobal =
  typeof window !== "undefined"
    ? window
    : { sessionStorage: { getItem: () => false, setItem: () => true } }

const Layout = ({ children }) => {
  const [firstVisit, toggleFirstVisit] = useState(
    JSON.parse(windowGlobal.sessionStorage.getItem("firstVisit") || true)
  )

  const handleHideModal = (toggle = false) => {
    toggleFirstVisit(toggle)
    windowGlobal.sessionStorage.setItem("firstVisit", toggle)
  }

  return (
    <>
      {firstVisit && <Modal onClick={() => handleHideModal(false)}></Modal>}
      <Nav></Nav>
      <Description>
        Welcome to this platform which presents the graduate projects from the
        programs MA Spatial Design and BA Interior Architecture & Furniture
        Design at Konstfack 2020.
      </Description>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  )
}

export default Layout
