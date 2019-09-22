import React from 'react'
import styled from 'styled-components/macro'

// const ButtonStyled = styled.button`
//   background-color: skyblue;
//   font-size: 1.2em;
//   flex-grow: 1;
// `

const NavigationStyled = styled.nav`
  display: flex;
  & button {
    background-color: skyblue;
    font-size: 1.2em;
    flex-grow: 1;
  }
`

export default function Navigation({ buttonTexts, onClick }) {
  return (
    <NavigationStyled className="Navigation">
      {buttonTexts.map((text, index) => (
        <button onClick={() => onClick(index)} key={index}>
          {text}
        </button>
      ))}
    </NavigationStyled>
  )
}
