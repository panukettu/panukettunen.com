import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import MEITSI from '../assets/meitsi2.png'
import { rhythm } from '../utils/typography'
import { EmojiLink } from './Links'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
          padding: rhythm(1 / 2),
        }}
      >
        <img
          src={MEITSI}
          alt={`Me`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3.25),
            height: rhythm(4.75),
            borderRadius: '1px 25px',
            boxShadow: '1px 1px 3px black',
          }}
        />
        <p>
          A software developer from Helsinki, Finland. Working with JS. <br/>You can also find me playing games, exercising or
          making music. <br/>
          Currently working as Web Developer for{' '}
          <a href="https://almamedia.fi">Alma Media</a>.
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
