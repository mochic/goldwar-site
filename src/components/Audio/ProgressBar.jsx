import React from 'react'
import styled from 'styled-components'

import { HowlConsumer } from '../Howl.context'

const ProgressBar = styled.div`
  background: yellow;
  height: 1px;
`

export default () => (
  <HowlConsumer>
    {({ duration, elapsedTime }) => {
      return (
        <ProgressBar
          style={{
            width: `${
              elapsedTime > 0 && duration > 0
                ? (elapsedTime / duration) * 100
                : 0
            }%`,
          }}
        />
      )
    }}
  </HowlConsumer>
)
