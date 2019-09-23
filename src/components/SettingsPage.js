import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function SettingsPage({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit({ title, question, answer }) //das was reingereicht wird
  }
  return (
    <SettingsStyled>
      <h2>Settings</h2>
      <button>Clear Bookmarks</button>
      <button>Clear Practice</button>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            onChange={event => setTitle(event.target.value)}
            value={title}
            type="text"
            name="title"
          />
        </label>
        <label>
          Question
          <textarea
            onChange={event => setQuestion(event.target.value)}
            value={question}
            name="question"
            cols="30"
            rows="5"
          ></textarea>
        </label>
        <label>
          Answer
          <textarea
            onChange={event => setAnswer(event.target.value)}
            value={answer}
            name="answer"
            cols="30"
            rows="5"
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
    </SettingsStyled>
  )
}
const SettingsStyled = styled.section`
  padding: 20px;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 100px 50px 50px auto 50px
  grid-gap: 10px;
  align-items: center;
  form {
    display: grid;
  }
  label {
    display: grid;
  }
  button {
    display: grid;
  }
`
