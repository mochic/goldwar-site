import React from 'react'
import { HowlConsumer } from '../Howl.context'
import { MdPause } from 'react-icons/md'
import { PrimaryButton } from './Buttons'

export default () => (
  <HowlConsumer>
    {({ pauseHowl }) => (
      <PrimaryButton onClick={pauseHowl}>
        <MdPause />
      </PrimaryButton>
    )}
  </HowlConsumer>
)
