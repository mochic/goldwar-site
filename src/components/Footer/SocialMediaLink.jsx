import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Link = styled.a`
  color: ${props => props.theme.colors.secondary};
`

export default ({ name, uri }) => (
  <Link href={uri} target="_blank" rel="noopener noreferrer">
    {
      {
        facebook: <FaFacebookF />,
        instagram: <FaInstagram />,
        twitter: <FaTwitter />,
        default: <span>{name}</span>,
      }[name]
    }
  </Link>
)
