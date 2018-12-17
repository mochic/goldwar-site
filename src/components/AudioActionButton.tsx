import React, { SFC } from 'react'
import { MdHeadset } from 'react-icons/md'
import styled from 'styled-components'

const ActionButtonContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10000;
`

const ActionButton = styled.button`
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.secondary};
  height: ${props => props.theme.sizes.actionButton.height}px;
  width: ${props => props.theme.sizes.actionButton.width}px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <ActionButtonContainer>
    <ActionButton>
      <MdHeadset />
    </ActionButton>
  </ActionButtonContainer>
)
