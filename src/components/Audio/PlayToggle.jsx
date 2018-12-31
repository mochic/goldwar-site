import React from 'react'
import styled from 'styled-components'

import { HowlConsumer } from '../Howl.context'
import PauseButton from './PauseButton'
import PlayButton from './PlayButton'

export default () => (
  <HowlConsumer>
    {({ currentHowl }) =>
      currentHowl().howl.playing() ? <PauseButton /> : <PlayButton />
    }
  </HowlConsumer>
)
