import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Pages from './Pages/StaticScrollLayout'

const LayoutContainer = styled.div``

const interpolateLinearScroll = (from , to) => {

}

export default class StaticScrollLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPageIndex: 0,
            isScrolling: false,
        }
    }

    componentDidMount = () => {
        const component = ReactDOM.findDOMNode(this) // likely very inefficient, todo find a better way?  
        component.addEventListener('touchmove', this.handleTouchMove)
        component.addEventListener('touchstart', this.handleTouchStart)

        window.addEventListener('mousewheel', this.handleMouseWheel) // i think i prefer window for this
    }

    componentWillUnmount = () => {
        const component = ReactDOM.findDOMNode(this)
        component.removeEventListener('touchmove', this.handleTouchMove)
        component.removeEventListener('touchstart', this.handleTouchStart)

        window.removeEventListener('mousewheel', this.handleMouseWheel) 
    }

    hasNextPage = () => {

    }

    hasPreviousPage = () => {

    }

    scrolToNext = () => {}

    scrollToPrevious = () => {}

    render = () => <LayoutContainer><Pages /></LayoutContainer>
}

export default ({children}) => <LayoutContainer>{children}</LayoutContainer> 

      
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