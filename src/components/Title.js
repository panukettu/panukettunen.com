import React from 'react'
import { rhythm, scale } from '../utils/typography'

import { Link } from 'gatsby'

const Title = ({ renderBig, text }) => {
  const smallTitle = () => (
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
        marginBottom: rhythm(1),
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={'/'}
      >
        {text}
      </Link>
    </h3>
  )

  const bigTitle = () => (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={'/'}
      >
        {text === '/' ? '/index' : text}
      </Link>
    </h1>
  )

  return renderBig ? bigTitle() : smallTitle()
}

export default Title
