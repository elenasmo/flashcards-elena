import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import CardList from './CardList'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { getAllCards, postCard, patchCard } from '../services'

export default function App() {
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

  function renderPage(index) {
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

    return pages[index] || <section>404</section>
  }

  return (
    <Router>
      <AppStyled>
        <GlobalStyle />
        <Route exact path="/" render={() => renderPage(0)} />
        <Route path="/practice" render={() => renderPage(1)} />
        <Route path="/bookmark" render={() => renderPage(2)} />
        <Route path="/settings" render={() => renderPage(3)} />
        <Navigation />
      </AppStyled>
    </Router>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  margin: 20px;
  height: 100vh;
`
