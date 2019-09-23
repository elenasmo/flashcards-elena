import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

export default function CardList({ cards, title, onBookmarkClick }) {
  return (
    <StyledHomePage className="page">
      <h1>{title}</h1>
      {cards.map(card => (
        <Card
          key={card._id}
          title={card.title}
          question={card.question}
          answer={card.answer}
          isBookmarked={card.isBookmarked}
          onBookmarkClick={event => onBookmarkClick(card)}
        />
      ))}
    </StyledHomePage>
  )
}

const StyledHomePage = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
  overflow-y: scroll;
`
