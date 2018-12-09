import React from 'react'
import { HowlConsumer } from '../Howl.context'
import { MdFastForward } from 'react-icons/md'
import { PrimaryButton } from './Buttons'

export default () => (
  <HowlConsumer>
    {({ nextHowl }) => (
      <PrimaryButton onClick={nextHowl}>
        <MdFastForward />
      </PrimaryButton>
    )}
  </HowlConsumer>
)
