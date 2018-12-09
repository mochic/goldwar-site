import React from 'react'
import { HowlConsumer } from '../Howl.context'
import { MdPlayArrow } from 'react-icons/md'
import { PrimaryButton } from './Buttons'

export default () => (
  <HowlConsumer>
    {({ playHowl }) => (
      <PrimaryButton onClick={playHowl}>
        <MdPlayArrow />
      </PrimaryButton>
    )}
  </HowlConsumer>
)
