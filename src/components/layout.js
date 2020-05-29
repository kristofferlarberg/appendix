import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Modal from "./modal"

import styled from "styled-components"

const ViewPortContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1; 
  position: absolute;
  width: 100%
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.main`
  display: flex;
  width: 100vw;
  margin: 0;
  padding: 0;
`

const windowGlobal = typeof window !== 'undefined' ? window : {localStorage: {getItem: () => false, setItem: () => true}}
//const module = typeof window !== `undefined` ? require("module") : null


const Layout = ({ children }) => {
//  if (typeof window !== `undefined`) {
 
  //typeof window !== "undefined" && window.localStorage
  const [firstVisit, toggleFirstVisit] = useState(
    JSON.parse(windowGlobal.localStorage.getItem("firstVisit") || true)
  )
//} else {
//  const [firstVisit, toggleFirstVisit] = useState(true)
//}
  //[värde, funktion]
  const handleHideModal = (toggle = false) => {
    toggleFirstVisit(toggle)
    windowGlobal.localStorage.setItem("firstVisit", toggle)
    console.log("HEJ")
  }

  return (
    <ViewPortContainer>
      {firstVisit && <Modal onClick={() => handleHideModal(false)}></Modal>}
      <ContentContainer>
        <Header></Header>
        <Container>{children}</Container>
        <Footer></Footer>
      </ContentContainer>
    </ViewPortContainer>
  )
}

export default Layout
