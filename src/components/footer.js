import React from "react"
import styled from "styled-components"
import Logo from "../images/konstfack-stor.png"

const Container = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  border-top: #aaa solid 1px;
  height: auto;
`

const KonstfackLogo = styled.img`
  width: 15rem;
  height: auto;
  padding: 2rem 0;
`

export default function Footer() {
  return (
    <Container>
      <KonstfackLogo src={Logo} alt="Konstfack logo"></KonstfackLogo>
    </Container>
  )
}
