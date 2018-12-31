import React from 'react'
import styled from 'styled-components'
import { IconButton } from './Shared'
import { MdPlayArrow } from 'react-icons/md'
import { HowlConsumer } from '../Howl.context'

const PlayArrow = styled(MdPlayArrow)`
  color: yellow;
`

const PlayButton = styled(IconButton)``

export default () => (
  <HowlConsumer>
    {({ playHowl }) => (
      <PlayButton onClick={playHowl}>
        <PlayArrow />
      </PlayButton>
    )}
  </HowlConsumer>
)
