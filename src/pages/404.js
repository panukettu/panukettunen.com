import React from 'react'
import { rhythm } from '../utils/typography'
import Sticky from '../components/Sticky'
const NotFoundPage = () => (
  <div
    style={{
      backgroundColor: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(32),
      padding: `0px ${rhythm(1.5)} ${rhythm(3 / 4)}`,
      boxShadow: '3px 3px 3px',
      minHeight: '100vmin',
    }}
  >
    <Sticky />
    <h1>NOT FOUND</h1>
    <p>better luck next time :O</p>
  </div>
)

export default NotFoundPage
