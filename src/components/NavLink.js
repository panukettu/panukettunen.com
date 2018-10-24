import React from 'react'
import { Link } from 'gatsby'
export const NavLink = ({ to, children }) => {
  let renderLink = true
  if (typeof window !== `undefined`) {
    renderLink = to === window.location.pathname
  }

  return renderLink ? <Link to={to}>{children}</Link> : <span>{children}</span>
}
