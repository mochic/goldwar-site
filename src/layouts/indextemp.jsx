import React, { Component } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { navigate } from 'gatsby'
import { HowlProvider } from '../components/Howl.context'
import AudioPlayer from '../components/Audio'
import debounce from 'lodash/debounce'

import BlackoutWAV from '../audio/Blackout.wav'
import DrunkAgainWAV from '../audio/Drunk Again.wav'
import TheEndWAV from '../audio/Goldwar_SONG_MASTER.wav'

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

const PageURLs = ['/', '/events', '/about']

const LayoutContainer = styled.div`
  background: red;
  margin: 0px;
  top: 0px;
  left: 0px;
`

const ChildrenContainer = styled.div`
  background: blue;
`

const FloatingFooterContainer = styled.div`
  bottom: 8px;
  left: 8px;
  position: fixed;
  width: 150px;
`

class PageScrollLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevScrollY: null,
      pageIndex: 0,
    }
  }

  componentDidMount = () => {
    // window.addEventListener('mousewheel', this.handleScroll, false)
    // window.addEventListener('touchmove', this.handleTouchMove, false)
    // window.addEventListener('touchstart', this.handleTouchStart, false)
    console.log('listening to scroll')
  }

  componentWillUnmount = () => {
    // window.removeEventListener('mousewheel', this.handleScroll, false)
    // window.removeEventListener('touchmove', this.handleTouchMove, false)
    // window.removeEventListener('touchstart', this.handleTouchStart, false)
    console.log('not listening to scroll')
  }

  handleMouseWheel = e => {}

  handleTouchMove = e => {
    e.preventDefault()
  }

  handleTouchStart = e => {
    e.preventDefault()
    console.log(e.touches[0])
    // this feels terrible...dont see another way tho...
    const initialY = e.touches[0].clientY
    const handleSwipe = e => {
      e.preventDefault()
      console.log(handleSwipe, initialY, e)
      if (initialY > e.changedTouches[0].clientY) {
        this.navigateToNext()
      } else {
        this.navigateToPrevious()
      }
      window.removeEventListener('touchend', handleSwipe)
    }

    window.addEventListener('touchend', handleSwipe)
  }

  handleTouchEnd = e => {
    e.preventDefault()
    // this feels terrible...dont see another way tho...
    window.removeEventListener('touchend', this.handleTouchEnd)
  }

  handleScroll = e => {
    navigate('/about')
    if (this.state.prevScrollY) {
      const currentIndex = PageURLs.indexOf(this.props.location.pathname)
      if (window.scrollY > this.state.prevScrollY) {
        // attempt to navigate to next page
        const nextPage = PageURLs[currentIndex + 1]
        console.log('butt', nextPage)
        if (nextPage) {
          this.setState({ prevScrollY: null })
          navigate(nextPage, { state: { prevScrollY: null } })
        } else {
          // no page after next, dont scroll
        }
      } else if (window.scrollY < this.state.prevScrollY) {
        // attempt to navigate to prev page
        const prevPage = PageURLs[currentIndex - 1]
        if (prevPage) {
          this.setState({ prevScrollY: null })
          navigate(prevPage)
        } else {
          // no prev page, dont scroll
        }
      } else {
        // better to do nothing if they're equal?
      }
    } else {
      this.setState({ prevScrollY: window.scrollY })
    }
  }

  navigateToPrevious = () => {
    const currentIndex = PageURLs.indexOf(this.props.location.pathname)
    const previousURL = PageURLs[currentIndex - 1]
    console.log('previous', previousURL)
    if (previousURL) {
      navigate(previousURL)
    }
  }

  navigateToNext = () => {
    // debounce this to limit the rate in which we call navigate?
    const currentIndex = PageURLs.indexOf(this.props.location.pathname)
    const nextURL = PageURLs[currentIndex + 1]
    console.log('next', nextURL)
    if (nextURL) {
      navigate(nextURL)
    }
  }

  render = () => (
    <ThemeProvider theme={BlackoutTheme}>
      <HowlProvider
        playList={[
          { name: 'blackout', sources: [BlackoutWAV] },
          { name: 'drunk again', sources: [DrunkAgainWAV] },
          { name: 'the end', sources: [TheEndWAV] },
        ]}
      >
        <LayoutContainer>
          <ChildrenContainer>{this.props.children}</ChildrenContainer>
          <FloatingFooterContainer>
            <AudioPlayer />
          </FloatingFooterContainer>
        </LayoutContainer>
      </HowlProvider>
    </ThemeProvider>
  )
}

export default PageScrollLayout
