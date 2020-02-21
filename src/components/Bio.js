import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import MEITSI from '../assets/me1.jpg'
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
            marginRight: rhythm(2 / 3),
            marginBottom: 0,
            width: rhythm(5),
            height: rhythm(5),
            borderRadius: '1px 25px',
            boxShadow: '1px 1px 3px black',
          }}
        />
        <p>
          A software developer from Helsinki, Finland. Working with JS. You can
          also find me playing games, exercising or making music. I am working
          as a Web Developer for <a href="https://almamedia.fi">Alma Media</a>.
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
