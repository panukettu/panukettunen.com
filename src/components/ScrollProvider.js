import React from 'react'
import _ from 'lodash'

class ScrollProvider extends React.Component {
  state = {
    scrollY: 0,
    scrollX: 0,
  }
  componentDidMount = () => {
    window.addEventListener('scroll', () =>
      this.setScroll(window.scrollY, window.scrollX)
    )
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.setScroll)
  }

  setScroll = _.throttle(
    (scrollY, scrollX) => this.setState({ scrollY, scrollX }),
    100
  )

  render() {
    return this.props.children({
      scrollY: this.state.scrollY,
      scrollX: this.state.scrollX,
    })
  }
}

function setScroll() {}

export default ScrollProvider
