import React from 'react'
import Navigation from './Navigation'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

export default {
  title: 'Navigation',
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '500px' }}>{storyFn()}</div>
}

export const Nav = () => <Navigation />
