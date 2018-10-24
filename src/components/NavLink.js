import React from 'react'
import { Link } from 'gatsby'
export const NavLink = ({ to, children }) =>
  to === window.location.pathname ? (
    <span>{children}</span>
  ) : (
    <Link to={to}>{children}</Link>
  )
