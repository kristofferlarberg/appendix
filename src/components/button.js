import React from "react"
import styled from "styled-components"

const ButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 0.5rem;
  padding: 1rem;
  background-color: white;
  border: #aaa solid 1px;
  border-radius: 100px;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.04rem;
  cursor: pointer;
`

const Button = ({ children }) => (
    <ButtonDiv>
      {children}
    </ButtonDiv>
)

export default Button
