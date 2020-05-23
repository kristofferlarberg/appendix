import React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin: 0;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`

const NameList = ({ children }) => <Section>{children}</Section>

export default NameList
