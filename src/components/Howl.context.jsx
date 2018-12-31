import React, { Component, createContext } from 'react'
import { Howl, Howler } from 'howler'

const HowlContext = createContext()

export class HowlProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      howlIndex: 0,
      howls: props.playList.map(({ name, sources: src }) => ({
        name,
        howl: new Howl({ src, html5: true }),
      })),
      elapsedTime: 0,
      duration: 0,
      isPlaying: false,
    }

    // this.currentHowl = this.currentHowl.bind(this)
    this.nextHowl = this.nextHowl.bind(this)
    // this.pauseHowl = this.pauseHowl.bind(this)
    // this.playHowl = this.playHowl.bind(this)
    this.previousHowl = this.previousHowl.bind(this)
    // this.stopHowl = this.stopHowl.bind(this)
    // this.getHowl = this.getHowl.bind(this)
  }

  // currentHowl() {
  //   return this.state.howls[this.state.howlIndex]
  // }
  currentHowl = () => this.state.howls[this.state.howlIndex]

  getHowl = index => {
    return this.state.howls[
      typeof index === 'number' ? index : this.state.howlIndex
    ].howl
  }
  // getHowl({ index }) {
  //   return this.state.howls[index ? index : this.state.howlIndex].howl
  // }

  nextHowl() {
    const wasPlaying = this.currentHowl().howl.playing()
    this.stopHowl()

    const nextIndex = (this.state.howlIndex + 1) % this.state.howls.length
    this.setState({
      howlIndex: nextIndex,
      elapsedTime: 0,
    })
    if (wasPlaying) {
      // this.playHowl() do not use currentIndex as it assumes state will get immediately updated which it wont...
      this.playHowl(nextIndex)
    }
  }

  pauseHowl = index => {
    this.getHowl(index).pause()
    clearInterval(this.updateInterval)
    this.setState({ isPlaying: false })
  }

  playHowl = index => {
    if (!this.getHowl(index).playing()) {
      this.getHowl(index).play()
    }
    this.updateInterval = setInterval(this.updateStatus, 1000)
    this.setState({ isPlaying: true, elapsedTime: 0 })
  }

  previousHowl = () => {
    const wasPlaying = this.currentHowl().howl.playing()
    this.stopHowl()

    const previousIndex =
      this.state.howlIndex - 1 > 0
        ? this.state.howlIndex - 1
        : this.state.howls.length - 1
    this.setState({
      howlIndex: previousIndex,
      elapsedTime: 0,
    })

    if (wasPlaying) {
      this.playHowl(previousIndex)
    }
  }

  stopHowl = index => {
    this.getHowl(index).stop()
    clearInterval(this.updateInterval)
    this.setState({ isPlaying: false, elapsedTime: 0 })
  }

  updateStatus = () => {
    this.setState({
      elapsedTime: this.currentHowl().howl.seek(),
      duration: this.currentHowl().howl.duration(),
    })
  }

  render() {
    return (
      <HowlContext.Provider
        value={{
          currentHowlName: this.currentHowl().name,
          currentHowl: this.currentHowl,
          isPlaying: this.state.isPlaying,
          nextHowl: this.nextHowl,
          pauseHowl: this.pauseHowl,
          playHowl: this.playHowl,
          previousHowl: this.previousHowl,
          stopHowl: this.stopHowl,
          duration: this.state.duration,
          elapsedTime: this.state.elapsedTime || 0,
        }}
      >
        {this.props.children}
      </HowlContext.Provider>
    )
  }
}

export const HowlConsumer = HowlContext.Consumer
