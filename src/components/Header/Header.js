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
    <div className="scroll-container">
      <ScrollProvider>
        {({ scrollY }) => {
          let scrolled = scrollY > 150
          return (
            <div
              className={`icon-title scroll-link ${scrolled ? 'scrolled' : ''}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              panukettunen.com
            </div>
          )
        }}
      </ScrollProvider>
    </div>
    <div className="title-container">
      <Title
        renderBig={location.pathname === '/' || location.pathname === '/me'}
        text={location.pathname}
      />
      <div className="menu-container">
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
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
