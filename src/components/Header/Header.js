import React from 'react'
import { NavLink } from '../Links'
import Title from '../Title'
import Icons from '../Icons'
import { rhythm } from '../../utils/typography'
import ScrollProvider from '../ScrollProvider'

import './Header.css'

const Header = ({ location }) => (
  <>
    <Icons />
    <div
      style={{
        position: 'sticky',
        top: '0px',
        opacity: 0.9,
        height: rhythm(1.425),
      }}
    >
      <ScrollProvider>
        {({ scrollY }) => {
          let scrolled = scrollY > 150
          return (
            <div
              className={`icon-title toplink ${scrolled ? 'scrolled' : ''}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              panukettunen.com
            </div>
          )
        }}
      </ScrollProvider>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
                width: '100%',
              }}
            >
              index 🏠
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/me"
              style={{
                textDecoration: 'none',
              }}
            >
              me 🐱‍👤
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Header
