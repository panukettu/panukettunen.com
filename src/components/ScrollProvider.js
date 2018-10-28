import React from 'react'

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
    window.removeEventListener('scroll', this.setScrollY)
  }

  setScroll = (scrollY, scrollX) => this.setState({ scrollY, scrollX })

  render() {
    return this.props.children({
      scrollY: this.state.scrollY,
      scrollX: this.state.scrollX,
    })
  }
}

export default ScrollProvider
