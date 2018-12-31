import React from 'react'
import styled from 'styled-components'
import { MdFastForward } from 'react-icons/md'

import { IconButton } from './Shared'
import { HowlConsumer } from '../Howl.context'

const FastForward = styled(MdFastForward)`
  color: yellow;
`

const NextButton = styled(IconButton)``

export default () => (
  <HowlConsumer>
    {({ nextHowl }) => (
      <NextButton onClick={nextHowl}>
        <FastForward />
      </NextButton>
    )}
  </HowlConsumer>
)
