import React from "react"
import styled from "styled-components"

const ButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 1rem;
  padding: 1rem;
  background-color: white;
  border: #aaa solid 1px;
  border-radius: 100px;
  font-size: 1.7rem;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.04rem;
  cursor: pointer;

  &:hover {
    border: blue 1px solid;
    color: blue;
  }
`

const Button = ({ children }) => (
    <ButtonDiv>
      {children}
    </ButtonDiv>
)

export default Button
