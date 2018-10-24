import React from 'react'
import { Link } from 'gatsby'

export const EmojiLink = ({ to, emoji, children, ...props }) => (
  <Link to={to} {...props}>
    {emoji} {children}
  </Link>
)

export const NavLink = ({ to, children, ...props }) => {
  let renderLink = true
  if (typeof window !== `undefined`) {
    renderLink = to !== window.location.pathname
  }

  return renderLink ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <span {...props}>{children}</span>
  )
}
