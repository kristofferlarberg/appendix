import React from "react"
import styled from "styled-components"

const BorderSection = styled.section`
  margin: 0;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border-right: 1px solid #aaa;
`

const PaddingSection = styled.section`
  padding: 2rem;
`

const NameList = ({ children }) => (
  <BorderSection>
    <PaddingSection>{children}</PaddingSection>
  </BorderSection>
)

export default NameList
