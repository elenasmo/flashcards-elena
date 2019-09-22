import React, { useState } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components/macro'

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  margin: 20px;
  height: 100vh;
`

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!'
    }
  ])

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <section>Settings</section>
    }

    function renderCards() {
      setCards([...cards])
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <AppStyled>
      <GlobalStyle />
      {renderPage()}
      <Navigation
        buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
        onClick={setActiveIndex}
      />
    </AppStyled>
  )
}
