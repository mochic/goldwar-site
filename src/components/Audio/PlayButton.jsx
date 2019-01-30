import React from 'react'
import styled from 'styled-components'
import { IconButton } from './Shared'
import { MdPlayArrow } from 'react-icons/md'
import { HowlConsumer } from '../Howl.context'

const PlayArrow = styled(MdPlayArrow)`
  color: ${props => props.theme.colors.highlight};
`

const PlayButton = styled(IconButton)``

export default () => (
  <HowlConsumer>
    {({ playHowl }) => {
      return (
        <PlayButton onClick={playHowl}>
          <PlayArrow />
        </PlayButton>
      )
    }}
  </HowlConsumer>
)
