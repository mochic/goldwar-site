import React from 'react'
import styled from 'styled-components'
import { MdPause } from 'react-icons/md'

import { HexagonButton } from './Shared'
import { HowlConsumer } from '../Howl.context'

const Pause = styled(MdPause)`
  margin: 14% 36%;
  color: yellow;
`

const PauseButton = styled(HexagonButton)``

export default () => (
  <HowlConsumer>
    {({ pauseHowl }) => (
      <PauseButton onClick={pauseHowl}>
        <Pause />
      </PauseButton>
    )}
  </HowlConsumer>
)
