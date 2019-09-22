import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'

export default function Settings() {
  const [newCards, setNewCards] = useState([])
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNewCards([...newCards, { title, question, answer }])
  }
  return (
    <div>
      <section>
        <h2>Create a new flashcard</h2>
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
      </section>
      {newCards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}
// const SettingsStyle = styled.section`
//   padding: 20px;
//   overflow-y: scroll;
//   display: grid;
//   grid-gap: 10px;
//   align-content: flex-start;
//   form {
//     display: grid;
//     grid-gap: 10px;
//     ​ label {
//       display: grid;
//       grid-gap: 10px;
//       margin-bottom: 10px;
//     }
//   }
// `
