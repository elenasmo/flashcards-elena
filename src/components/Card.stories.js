import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const notBookmarked = () => (
  <Card title="Title" question="Question" isBookmarked={false} />
)

export const isBookmarked = () => (
  <Card title="Title" question="Question" isBookmarked={true} />
)
