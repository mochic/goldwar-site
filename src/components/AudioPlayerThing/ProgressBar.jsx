import React from 'react'
import styled from 'styled-components'

import { HowlConsumer } from '../Howl.context'

const ProgressBar = styled.div`
  background: ${props => props.color};
  height: 100%;
`

export default ({color}) => (
  <HowlConsumer>
    {({ duration, elapsedTime }) => {
      return (
        <ProgressBar
        color={color}
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
