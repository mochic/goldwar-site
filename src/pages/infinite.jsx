import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle, css, keyframes } from 'styled-components'
import AudioPlayer from '../components/Audio'
import { HowlProvider } from '../components/Howl.context'

import test from '../audio/test.wav'
import BlackoutWAV from '../audio/Blackout.wav'
import DrunkAgainWAV from '../audio/Drunk Again.wav'
import TheEndWAV from '../audio/Goldwar_SONG_MASTER.wav'

// const linearIncrement = (from, to, dt, duration) => (from - to) / duration / dt

const scrollTo = (
  element,
  from,
  to,
  duration,
  currentTime,
  linearIncrement
) => {
  if (from <= 0) {
    from = 0
  }
  if (to <= 0) {
    to = 0
  }
  if (currentTime >= duration) return
  let delta = to - from
  let progress = ((currentTime / duration) * Math.PI) / 2
  let position = delta * Math.sin(progress)
  console.log(linearIncrement)
  setTimeout(() => {
    console.log('timed out', from, to, progress, position, linearIncrement)
    window.scrollTo({ top: from + linearIncrement, behavior: `smooth` })
    scrollTo(
      element,
      from + position,
      to,
      duration,
      currentTime + 10,
      linearIncrement
    )
  }, 10)
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background: #4f4a7d;
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  ::-webkit-scrollbar {
    background: #ff0000;
  }
`

const Body0 = styled.div`
  background: red;
  height: 100vh;
`

const Body1 = styled.div`
  background: green;
  height: 100vh;
`

const Body2 = styled.div`
  background: blue;
  height: 100vh;
`

const ScrollKeys = keyframes`
    0% {
        -webkit-transform: translateY(0px);
    }
    100% {
        -webkit-transform: translateY(-667px);
    }

`

const FloatingPlayerContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 50px;
`

const MainBody = styled.div`
  background: yellow;
  ${({ animate }) =>
    animate &&
    css`
      animation: ${ScrollKeys} 2s ease-in-out 0s forwards;
    `};
` // from: https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll

export default class Infinite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false,
      scrollTop: 0,
    }
    this.animating = false
  }

  componentDidMount = () => {
    const component = ReactDOM.findDOMNode(this)
    // window.addEventListener('mousewheel', this.handleMouseWheel)
    // window.addEventListener('touchmove', this.handleTouchMove)
    // window.addEventListener('touchstart', this.handleTouchStart)
    // window.addEventListener('scroll', this.handleScroll)
    // // component.addEventListener('mousewheel', this.handleMouseWheel)
    component.addEventListener('touchmove', this.handleTouchMove) // this is the one that prevents the overscroll on ios...
    component.addEventListener('touchstart', this.handleTouchStart)
    // component.addEventListener('scroll', this.handleScroll)
    // document.addEventListener('mousewheel', this.handleMouseWheel)
    // document.addEventListener('touchmove', this.handleTouchMove)
    // document.addEventListener('touchstart', this.handleTouchStart)
    // document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    const component = ReactDOM.findDOMNode(this)
    window.removeEventListener('mousewheel', this.handleMouseWheel)
    window.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('touchstart', this.handleTouchStart)
    window.removeEventListener('scroll', this.handleScroll)
    component.removeEventListener('mousewheel', this.handleMouseWheel)
    component.removeEventListener('touchmove', this.handleTouchMove)
    // component.removeEventListener('touchstart', this.handleTouchStart)
    // component.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    e.preventDefault()
  }

  handleMouseWheel = e => {}

  handleTouchStart = e => {
    e.preventDefault()
    console.log(e.touches[0])
    // this feels terrible...dont see another way tho...
    const initialY = e.touches[0].clientY
    const handleSwipe = e => {
      e.preventDefault()
      console.log(handleSwipe, initialY, e)
      if (initialY > e.changedTouches[0].clientY) {
        if (!this.animating) {
          this.navigateToNext()
        }
      } else {
        if (!this.animating) {
          this.navigateToPrevious()
        }
      }
      window.removeEventListener('touchend', handleSwipe)
      console.log('tried to remove listener')
    }

    window.addEventListener('touchend', handleSwipe)
  }

  handleTouchMove = e => {
    e.preventDefault()
    // this.body1.scrollIntoView({ behavior: `smooth` })
  }

  navigateToPrevious = () => {
    console.log('navigating to previous')
    // this.setState({ animate: false })
    //this.body0.scrollIntoView({ behavior: `smooth` })
    scrollTo(this.body1, 500, 0, 2000, 0, -4)
  }

  navigateToNext = () => {
    console.log('navigating to next')
    this.animating = true
    // console.log(
    //   this.body0.scrollTop,
    //   this.body1.scrollTop,
    //   this.body2.scrollTop
    // )
    scrollTo(this.body1, 0, 500, 2000, 0, 4)
    // this.container.scrollTop(300)
    //this.body1.scrollIntoView({ behavior: `smooth` })
    // this.setState({ animate: true })
    // setTimeout(
    //   () => ((this.animating = false), this.setState({ animate: false })),
    //   1000
    // ) // approximate animation duration
  }

  render = () => (
    <HowlProvider
      playList={[
        {
          name: 'blackout',
          sources: [`https://s3-us-west-2.amazonaws.com/goldwar/Blackout.wav`],
        },
        {
          name: 'drunk again',
          sources: [
            `https://s3-us-west-2.amazonaws.com/goldwar/Drunk+Again.wav`,
          ],
        },
        {
          name: 'the end',
          sources: [
            `https://s3-us-west-2.amazonaws.com/goldwar/Goldwar_SONG_MASTER.wav`,
          ],
        },
      ]}
    >
      <div ref={container => (this.container = container)}>
        <GlobalStyle />
        <MainBody animate={this.state.animate}>
          <Body0 ref={body0 => (this.body0 = body0)} />
          <Body1 ref={body1 => (this.body1 = body1)} />
          <Body2 ref={body2 => (this.body2 = body2)} />
        </MainBody>
      </div>
      <FloatingPlayerContainer>
        <AudioPlayer />
      </FloatingPlayerContainer>
    </HowlProvider>
  )
}
