import React from 'react'

import Icons from './Icons'
import { rhythm } from '../utils/typography'

class Sticky extends React.Component {
  constructor() {
    super()
    this.state = {
      sticky: false,
      scrollY: 0,
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', this.setScroll)
    }
  }

  componentDidUpdate() {
    if (this.state.scrollY > 50 && !this.state.sticky) {
      this.setState({ sticky: true })
    } else if (this.state.scrollY < 50 && this.state.sticky) {
      this.setState({ sticky: false })
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.setScroll)
  }

  setScroll = () => this.setState({ scrollY: window.scrollY })

  render() {
    let sticky = {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: 0,
      padding: 0,
      height: '50px',
      position: 'fixed',
      top: 0,
      width: rhythm(30.5),
      backgroundColor: 'white',
    }

    let notSticky = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      margin: 0,
      padding: 0,
      height: '55px',
    }

    return (
      <div style={this.state.sticky ? sticky : notSticky}>
        {this.state.sticky && <div style={notSticky}>&nbsp;</div>}
        <Icons />
      </div>
    )
  }
}

export default Sticky
