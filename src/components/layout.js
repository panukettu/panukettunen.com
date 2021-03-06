import React from 'react'
import { rhythm } from '../utils/typography'

import Header from './Header/Header'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div
        style={{
          backgroundColor: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(28),
          padding: `0px ${rhythm(1.5)} ${rhythm(3 / 4)}`,
          boxShadow: '3px 3px 3px',
          minHeight: '100vh',
        }}
      >
        <Header location={location} />
        {children}
      </div>
    )
  }
}

export default Layout
