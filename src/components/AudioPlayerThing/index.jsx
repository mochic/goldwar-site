import React, { Component } from 'react'

import styled from 'styled-components'

import ActionButton from './ActionButton'
import ProgressBar from './ProgressBar'
import Player from './Player'
import SubPlayer from './SubPlayer'

const ActionButtonContainer = styled.div`
  position: absolute;
  z-index: 10000;
  right: 0.5rem;
  top: -1.5rem;
  transform: translateX(-50%);
`

const PlayerContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: 22px;
  align-items: center;
`

const ProgressBarContainer = styled.div``

const SubPlayerContainer = styled.div`
  font-family: 'roboto mono';
`

export default () => (
  <>
    <PlayerContainer>
      <Player />
    </PlayerContainer>
    <SubPlayerContainer>
      <SubPlayer expanded={false} />
    </SubPlayerContainer>
    {/* <ActionButtonContainer>
      <ActionButton />
    </ActionButtonContainer> */}
  </>
)
