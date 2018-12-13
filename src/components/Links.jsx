import React from 'react'
import styled from 'styled-components'

const Link = ({ children, uri }) => (
  <a href={uri} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export const TextLink = ({ name, ...link }) =>
  styled(<Link {...link}>{name}</Link>)`
    color: ${props => props.theme.colors.highlight};
  `
