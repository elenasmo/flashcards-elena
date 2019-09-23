import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import CardList from './CardList'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'

import { getAllCards, postCard, patchCard } from '../services'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    getAllCards().then(setCards)
  }, []) //leeres Array, damit es nur einmal beim Start aufgerufen wird

  const [cards, setCards] = useState([])

  function createCard(cardData) {
    console.log(cardData)
    postCard(cardData).then(card => setCards([...cards, card]))
  }

  function handleBookmarkClick(card) {
    console.log(card)
    console.log(cards)
    patchCard(card._id, { isBookmarked: !card.isBookmarked }).then(
      changedCard => {
        const index = cards.findIndex(card => card._id === changedCard._id)
        setCards([
          ...cards.slice(0, index),
          { ...card, isBookmarked: changedCard.isBookmarked },
          ...cards.slice(index + 1)
        ])
      }
    )
  }

  function renderPage() {
    const pages = {
      0: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
          title="Home"
          cards={cards}
        />
      ),
      1: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
          title="Practice"
          cards={cards.filter(card => card.doPractice)}
        />
      ),
      2: (
        <CardList
          onBookmarkClick={handleBookmarkClick}
          title="Bookmarks"
          cards={cards.filter(card => card.isBookmarked)}
        />
      ),
      3: <SettingsPage onSubmit={createCard} />
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

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  margin: 20px;
  height: 100vh;
`
