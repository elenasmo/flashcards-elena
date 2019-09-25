import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Card({
  title,
  question,
  answer,
  isBookmarked,
  onBookmarkClick
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }
  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
  }

  return (
    <CardStyled onClick={toggleAnswer} className="Card">
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
      <BookmarkStyled
        active={isBookmarked}
        onClick={handleBookmarkClick}
      ></BookmarkStyled>
    </CardStyled>
  )

  function Answer({ text }) {
    return (
      <React.Fragment>
        <hr />
        <p>{text}</p>
      </React.Fragment>
    )
  }
}

const CardStyled = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
const BookmarkStyled = styled.div`
  position: absolute;
  right: 10px;
  top: -10px;
  width: 30px;
  height: 10px;
  background: ${({ active }) => (active ? 'rgb(212, 55, 84)' : 'grey')};

  &:after {
    position: absolute;
    content: '';
    border: 15px solid ${({ active }) => (active ? 'rgb(212, 55, 84)' : 'grey')};
    top: 100%;
    left: 0;
    right: 0;
    border-bottom-color: transparent;
  }
`
