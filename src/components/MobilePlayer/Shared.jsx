import React from 'react'
import styled from 'styled-components'

export const HexagonContainer = styled.div.attrs({
  hexLargeBorder: props =>
    `${(props.size || props.theme.sizes.hexagon || 56) * 0.5}px`,
  hexHeight: props =>
    `${(props.size || props.theme.sizes.hexagon || 56) * 0.57732143}px`,
  hexSmallBorder: props =>
    `${(props.size || props.theme.sizes.hexagon || 56) * 0.28875}px`,
  hexWidth: props => `${props.size || props.theme.sizes.hexagon || 56}px`,
  hexColor: props => `${props.color || props.theme.colors.hexColor}`,
})`
  position: relative;
  width: ${props => props.hexWidth};
  height: ${props => props.hexHeight};
  background-color: ${props => props.hexColor};
  margin: ${props => props.smalWidth} 0;
  z-index: 1000;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    border-left: ${props => props.hexLargeBorder} solid transparent;
    border-right: ${props => props.hexLargeBorder} solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: ${props => props.hexSmallBorder} solid
      ${props => props.hexColor};
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: ${props => props.hexSmallBorder} solid
      ${props => props.hexColor};
  }
`

export const OctagonContainer = styled.div.attrs({
  octWidth: props => props.octWidth || `300px`,
  octHeight: props => props.octHeight || `200px`,
  octBorderColor: props => props.octBorderColor || `#0e0`,
  leftGradientWidth: props => props.leftGradientWidth || `150px`,
  rightGradientWidth: props => props.rightGradientWidth || `100px`,
})`
  display: flex;
  justify-content: center;
  align-content: center;
  width: ${props => props.octWidth};
  height: ${props => props.octHeight};
  overflow: hidden;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    width: ${props => props.octWidth};
    padding-top: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: 0;
  }

  &:before {
    background: none;
  }

  &:after {
    background: linear-gradient(
        45deg,
        ${props => props.octBorderColor}
          calc(50% - ${props => props.leftGradientWidth} + 10px),
        transparent 0,
        transparent calc(50% + ${props => props.leftGradientWidth} - 10px),
        ${props => props.octBorderColor} 0%
      ),
      linear-gradient(
        -45deg,
        ${props => props.octBorderColor}
          calc(50% - ${props => props.rightGradientWidth} + 10px),
        transparent 0,
        transparent calc(50% + ${props => props.rightGradientWidth} - 10px),
        ${props => props.octBorderColor} 0
      );
    box-shadow: 0 0 0 10px ${props => props.octBorderColor} inset;
  }
`

export const HexagonButton = props => <HexagonContainer {...props} />

export const IconButton = styled.button`
  align-content: center;
  display: flex;
  justify-content: center;
`
