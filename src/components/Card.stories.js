import React from 'react'
import Card from './Card'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

export default {
  title: 'Card',
  decorators: [withKnobs, Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const notBookmarked = () => (
  <Card title="Title" question="Question" isBookmarked={false} />
)

export const isBookmarked = () => (
  <Card
    title="Title"
    question="Question"
    isBookmarked={boolean('isBookmarked', true)}
  />
)
