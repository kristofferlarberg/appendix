import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.section`
  display: block;
`

const ButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 1rem;
  background-color: white;
  border: #aaaaaa solid 1px;
  border-radius: 100px;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: -0.04rem;
`

const Button = ({ children }) => (
  <ButtonContainer>
    <ButtonDiv>
      {children}
    </ButtonDiv>
  </ButtonContainer>
)

export default Button
