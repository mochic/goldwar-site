import React, { Component } from 'react'

import Loadable from 'react-loadable'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import EventsPage from './Pages/events'

import { navigate } from 'gatsby'

const CurrentPageContainer = styled.div`
  opacity: ${({ opacity }) => opacity};
`

const NextPageContainer = styled.div``

const PreviousPageContainer = styled.div``

const LayoutContainer = styled.div``

const Loading = () => <div>loading...</div>

const IndexPage = Loadable({
  loader: () => import('./Pages/index'),
  loading: Loading,
})

// const EventsPage = Loadable({
//   loader: () => import('./Pages/events'),
//   loading: Loading,
// })

const AboutPage = Loadable({
  loader: () => import('./Pages/about'),
  loading: Loading,
})

const Pages = [
  visibility => <IndexPage />,
  visibility => <EventsPage visibility={visibility} />,
  <AboutPage />,
]

const interpolateLinearScroll = (from, to, duration) => {}

export default class StaticScrollLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPageIndex: 0,
      scroll: {
        source: null,
        target: null,
      },
      visibility: { start: 0, stop: 0 },
    }
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

  // handleTouchStart = e => {
  //   console.log('touchstart')
  // }

  handleTouchMove = e => {}

  handleTouchStart = e => {
    e.preventDefault()
    const initialY = e.touches[0].clientY
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

  // handleTouchStart = e => {
  //   e.preventDefault()
  //   console.log(e.touches[0])
  //   // this feels terrible...dont see another way tho...
  //   const initialY = e.touches[0].clientY
  //   const handleSwipe = e => {
  //     e.preventDefault()
  //     if (initialY > e.changedTouches[0].clientY) {
  //       if (!this.animating) {
  //         this.navigateToNext()
  //       }
  //     } else {
  //       if (!this.animating) {
  //         this.navigateToPrevious()
  //       }
  //     }
  //     window.removeEventListener('touchend', handleSwipe)
  //     console.log('tried to remove listener')
  //   }

  //   window.addEventListener('touchend', handleSwipe)
  // }

  // handleTouchEnd = e => {
  //   e.preventDefault()
  //   console.log('touchend')
  //   if (e.changedTouches[0].clientY > 0) {
  //     this.scrollToNext()
  //   } else {
  //     this.scrollToPrevious()
  //   }
  // }

  scrollToNext = () => {
    console.log('scrolling next')
    navigate('/regular')
    // this.setState({ visibility: { start: 0, stop: 10 } })
    // if (Pages.length - 1 > this.state.currentPageIndex) {
    //   // this.setState({ currentPageIndex: this.state.currentPageIndex + 1 })
    //   this.setState({
    //     scroll: {
    //       source: this.state.currentPageIndex,
    //       target: this.state.currentPageIndex + 1,
    //     },
    //   })
    // }
  }

  scrollToPrevious = () => {
    console.log('scrolling previous')
    this.setState({ visibility: { start: 0, stop: 0 } })
    if (this.state.currentPageIndex > 0) {
      // this.setState({ currentPageIndex: this.state.currentPageIndex - 1 })
      this.setState({
        scroll: {
          source: this.state.currentPageIndex,
          target: this.state.currentPageIndex - 1,
        },
      })
    }
  }

  render = () => {
    return (
      <LayoutContainer>
        {/* <PreviousPageContainer>
          {Pages[this.state.currentPageIndex - 1]}
        </PreviousPageContainer> */}
        {/* <CurrentPageContainer>
          {Pages[this.state.currentPageIndex]}
        </CurrentPageContainer> */}
        <NextPageContainer>
          {Pages[this.state.currentPageIndex + 1](this.state.visibility)}
        </NextPageContainer>
      </LayoutContainer>
    )
  }
}
