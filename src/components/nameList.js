import React from "react"
import styled from "styled-components"
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
    <h2>Rubrik</h2>
    <Button>Namn Namnsson</Button>
    <Button>Namn Namnsson</Button>
  </Section>
)

export default NameList
