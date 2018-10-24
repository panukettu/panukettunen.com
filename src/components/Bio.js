import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import EmojiLink from './Link'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Me`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          A software developer from Helsinki, Finland, working with React and
          AngularJS. Apart from code you'll find me playing games, exercising or
          making music. Currently working for{' '}
          <a href="http://mtech.fi">Mtech Digital Solutions</a>
          <br />
          <br />
          <EmojiLink emoji="⏩" to="me" style={{ textDecoration: 'none' }}>
            Read more
          </EmojiLink>
        </p>
      </div>
    )
  }
}

export default Bio
