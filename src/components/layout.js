import React from 'react'
import { rhythm } from '../utils/typography'

import Title from './Title'
import { NavLink } from './Links'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    let header = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: rhythm(2),
        }}
      >
        <Title
          renderBig={location.pathname === '/' || location.pathname === '/me'}
          text={location.pathname}
        />
        <div>
          <ul>
            <li>
              <NavLink to="/">index</NavLink>
            </li>
            <li>
              <NavLink to="/me">me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
    return (
      <div
        style={{
          backgroundColor: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          boxShadow: '3px 3px 3px',
          minHeight: '100vmin',
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
