import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MoreButton from "./moreButton"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: grey;
`

const Header = () => (
  <Container>
    <nav>
      <h1>
        <Link to="/">Appendix</Link>
      </h1>
    </nav>
    <nav>
      <Link to="./about">
        <MoreButton></MoreButton>
      </Link>
    </nav>
  </Container>
)

export default Header
