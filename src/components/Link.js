import React from 'react'
import { Link } from 'gatsby'

const EmojiLink = props => {
  const { to, emoji, children } = props

  return (
    <Link to={to} {...props}>
      {emoji} {children}
    </Link>
  )
}

export default EmojiLink
