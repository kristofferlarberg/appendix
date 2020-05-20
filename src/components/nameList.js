import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "./button"

const Section = styled.section`
  margin: 0;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: grey;
`

const NameList = () => (
  <Section>
    <Link to="/student">
      <Button>Alvastina Ringqvist</Button>
    </Link>
    <Button>Cassandra Lorca Macchiavelli</Button>
    <Button>Cassandra Lorca Macchiavelli</Button>
    <Button>Cassandra Lorca Macchiavelli</Button>
    <Button>Cassandra Lorca Macchiavelli</Button>
  </Section>
)

export default NameList
