import React, { useState } from 'react'
import styled from 'styled-components/macro'

const [inputValue, setInputValue] = useState('')

export default function RenderSettings() {
  ;<form onSubmit={handleSubmit}>
    <label>
      Title:
      <input type="text" name="title" onChange={handleChange} />
    </label>
    <label>
      Question:
      <input type="text" name="question" onChange={handleChange} />
    </label>
    <label>
      Answer:
      <input type="text" name="answer" onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
}

function handleSubmit() {
  setInputValue([...cards])
}
