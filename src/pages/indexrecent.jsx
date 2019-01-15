import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import Slider from 'react-slick'

const BlackoutTheme = {
  background: '#A35558',
  color: '#BA2F56',
  colorAlternate: '#FFFDDA',
  socialMediaIconSize: 18,
  colors: {
    primary: '#4f4a7d',
    secondary: '#A25457',
    highlight: '#FFFDDA',
  },
  sizes: {
    actionButton: { height: 52, width: 52 },
  },
}

const GlobalStyle = createGlobalStyle`
  html. body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background: #4f4a7d;
    overflow: hidden;
  }
`

const PageSlider = styled(Slider)`
  overflow: hidden;
  height: 100%;
`

const Page0 = styled.div`
  background: red;
  height: 95vh;
`

const Page1 = styled.div`
  background: green;
  height: 95vh;
`

const Page2 = styled.div`
  background: blue;
  height: 95vh;
`

const MainContainer = styled.div`
  overflow: hidden !important;
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.previousTouchStart = null // setState is too async for us, we need to rely on this awful thing :_(...
  }

  componentDidMount = () => {
    const component = ReactDOM.findDOMNode(this)
    component.addEventListener('touchstart', this.handleTouchStart)
    component.addEventListener('touchmove', this.handleTouchMove, {
      passive: false,
    })
  }
  componentWillUnmount = () => {
    const component = ReactDOM.findDOMNode(this)
    component.removeEventListener('touchstart', this.handleTouchStart)
    component.removeEventListener('touchmove', this.handleTouchMove)
  }

  handleTouchStart = e => {
    this.previousTouchStart = e.touches[0]
  }

  handleTouchMove = e => {
    const diffClientX = e.touches[0].clientX - this.previousTouchStart.clientX
    console.log(diffClientX)
    if (Math.abs(diffClientX) > this.props.touchThreshold) {
      e.preventDefault() // prevent scrolling of body if we are trying to swipe the carousel
    }
  }

  render = () => (
    <MainContainer>
      <GlobalStyle />
      <PageSlider
        arrows={false}
        dots={false}
        infinite={false}
        slidesToShow={1}
        swipeToSlide={true}
        vertical={true}
        verticalSwiping={true}
        touchThreshold={5}
      >
        <Page0>
          <button />
        </Page0>
        <Page1>
          <button />
        </Page1>
        <Page2>
          <button />
        </Page2>
      </PageSlider>
    </MainContainer>
  )
}
