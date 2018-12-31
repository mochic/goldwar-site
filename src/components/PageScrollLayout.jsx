import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const LayoutContainer = styled.div``

class PageScrollLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevScrollY: null,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    if (this.state.prevScrollY) {
      if (window.scrollY > this.state.prevScrollY) {
        navigate(this.props.nextPageURL)
      } else if (window.scrollY < this.state.prevScrollY) {
        navigate(this.props.prevPageURL)
      } else {
        // better to do nothing if they're equal?
      }
    } else {
      this.setState({ prevScrollY: window.scrollY })
    }
  }

  render = () => <LayoutContainer>{this.props.children}</LayoutContainer>
}

export default PageScrollLayout
