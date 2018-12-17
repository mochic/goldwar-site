import React, { ReactNode, SFC } from 'react'

export interface ExternalLinkProps {
  children: ReactNode
  link: {
    uri: string
    name: string
  }
}

export const ExternalLink: SFC<ExternalLinkProps> = ({
  children,
  link: { uri },
}) => (
  <a href={uri} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)
