import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components/macro'
import cardData from './cards.json'

const StyledHomePage = styled.section`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`

export default function HomePage() {
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
  return (
    <StyledHomePage className="page">
      <h1>Homepage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </StyledHomePage>
  )
}
