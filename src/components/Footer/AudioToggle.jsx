import React from 'react'
import { HowlConsumer } from '../Howl.context'
import PauseButton from './PauseButton'
import PlayButton from './PlayButton'

export default () => (
  <HowlConsumer>
    {({ isPlaying }) => (isPlaying ? <PauseButton /> : <PlayButton />)}
  </HowlConsumer>
)
