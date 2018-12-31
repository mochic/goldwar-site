import React from 'react'
import styled from 'styled-components'
import { HexagonButton } from './Shared'
import { MdPlayArrow } from 'react-icons/md'
import { HowlConsumer } from '../Howl.context'

const PlayArrow = styled(MdPlayArrow)`
  margin: 14% 36%;
  color: black;
`
const PlayButton = styled(HexagonButton)``

export default () => (
  <HowlConsumer>
    {({ playHowl }) => (
      <PlayButton color={'yellow'} onClick={playHowl}>
        <PlayArrow />
      </PlayButton>
    )}
  </HowlConsumer>
)
