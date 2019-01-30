import React, { Component } from 'react'

import { Link, navigate } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'
import { MdPlayArrow } from 'react-icons/Md'

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
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
  font-size: 24px;
  text-align: center;
  line-height: 70px;
`
// const FloatingActionButtonContainer = styled.div`
//   position: fixed;
//   right: 50px;
//   bottom: 50px;
//   z-index: 10000;
// `

const SnackBar = styled.div`
  position: fixed;
  height: 8%;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);
  bottom 0;
  left: 0;
  z-index: 9999;
`

export default class FloatingAudioButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  render = () => {
    return (
      <>
        <ActionButtonContainer>
          {this.state.expanded ? (
            <div>Expanded</div>
          ) : (
            <ActionButton>
              <MdPlayArrow />
            </ActionButton>
          )}
        </ActionButtonContainer>
        <SnackBar />
      </>
    )
  }
}
