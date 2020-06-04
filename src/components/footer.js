import React from "react"
import styled from "styled-components"
import Logo from "../images/konstfack-stor.png"

const Container = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem 2rem;
  border-top: #aaa solid 1px;
  width: auto;
  height: auto;
  @media (max-width: 800px) {
    justify-content: center;
  }
`

const KonstfackLogo = styled.img`
  width: 11rem;
  height: auto;
  padding: 2rem 0;
  @media (max-width: 800px) {
    width: 8rem;
  }
`

export default function Footer() {
  return (
    <Container>
      <KonstfackLogo src={Logo} alt="Konstfack logo"></KonstfackLogo>
    </Container>
  )
}
