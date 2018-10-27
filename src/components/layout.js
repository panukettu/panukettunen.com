import React from 'react'
import { rhythm } from '../utils/typography'

import Title from './Title'
import { NavLink } from './Links'

import Sticky from './Sticky'

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
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
          padding: `0px ${rhythm(1.5)} ${rhythm(3 / 4)}`,
          boxShadow: '3px 3px 3px',
          minHeight: '100vmin',
        }}
      >
        <Sticky />
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
