import React from 'react'
import styled from 'styled-components'
import { IconButton } from './Shared'
import { MdPause } from 'react-icons/md'
import { HowlConsumer } from '../Howl.context'

const Pause = styled(MdPause)`
  color: yellow;
`

const PauseButton = styled(IconButton)``

export default () => (
  <HowlConsumer>
    {({ pauseHowl }) => (
      <PauseButton onClick={pauseHowl}>
        <Pause />
      </PauseButton>
    )}
  </HowlConsumer>
)
