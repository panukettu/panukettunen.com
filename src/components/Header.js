import React from 'react'
import { NavLink } from './Links'
import Title from './Title'
import Icons from './Icons'
import { rhythm } from '../utils/typography'
import ScrollProvider from './ScrollProvider'

const Header = ({ location }) => (
  <>
    <Icons />
    <div
      style={{
        position: 'sticky',
        top: '0px',
        backgroundColor: 'white',
        opacity: 0.9,
        height: rhythm(1.425),
      }}
    >
      <span
        className="icon-title"
        style={{
          fontSize: '9',
          lineHeight: '24px',
          fontWeight: 'bold',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <ScrollProvider>
          {({ scrollY }) => (scrollY > 150 ? '⏫ ' : '')}
        </ScrollProvider>
        panukettunen.com
      </span>
    </div>
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
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              ⏮ index
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/me"
              style={{
                textDecoration: 'none',
              }}
            >
              🐱💻 me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Header
