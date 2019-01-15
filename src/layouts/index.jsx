import React, { Component } from 'react'

import { navigate } from 'gatsby'
import ReactDOM from 'react-dom'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

const PageContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true,
  },
  exit: { opacity: 0 },
})

const LayoutContainer = styled.div`
  background: 'peach';
  height: 100vh;
`

const coloredLog = (...args) => console.log(...args, 'color: #bada55')

// v1 layouts are better here i think, only have to do findDOMNode once hopefully, etc etc etc of other obvious benefits
export default class ScrollableLayout extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    const component = ReactDOM.findDOMNode(this) // likely very inefficient, todo find a better way?
    component.addEventListener('touchend', this.handleTouchEnd)
    component.addEventListener('touchmove', this.handleTouchMove)
    component.addEventListener('touchstart', this.handleTouchStart)

    window.addEventListener('mousewheel', this.handleMouseWheel) // i think i prefer window for this
  }

  componentWillUnmount = () => {
    const component = ReactDOM.findDOMNode(this)
    component.removeEventListener('touchend', this.handleTouchEnd)
    component.removeEventListener('touchmove', this.handleTouchMove)
    component.removeEventListener('touchstart', this.handleTouchStart)

    window.removeEventListener('mousewheel', this.handleMouseWheel)
  }

  handleTouchStart = e => {
    e.preventDefault()
    const initialY = e.touches[0].clientY
    coloredLog('scroll to previous')
    const handleSwipe = e => {
      e.preventDefault()
      if (initialY > e.changedTouches[0].clientY) {
        this.scrollToNext()
      } else {
        this.scrollToPrevious()
      }

      window.removeEventListener('touchend', handleSwipe)
    }

    window.addEventListener('touchend', handleSwipe)
  }

  scrollToPrevious = () => {
    console.log('scroll to previous', 'color: #bada55')
    navigate('/events')
  }

  scrollToNext = () => {
    console.log('scroll to next', 'color: #bada55')
    navigate('/regular')
  }

  render = () => (
    <LayoutContainer>
      <PoseGroup>
        <PageContainer key="page-container">
          {this.props.children}
        </PageContainer>
      </PoseGroup>
    </LayoutContainer>
  )
}
