import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ButtonDiv from "./button"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: grey;
`;

const AboutButton = styled(ButtonDiv)`
  width: 50px;
  height: 50px;
`;

const Header = () => (
  <Container>
    <nav>
      <h1>
        <Link to="/">Appendix</Link>
      </h1>
    </nav>
    <nav>
      <Link to="./about">
        <AboutButton>...</AboutButton>
      </Link>
    </nav>
  </Container>
)

export default Header
