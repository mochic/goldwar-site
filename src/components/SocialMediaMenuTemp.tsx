import React, { ReactNode, SFC } from 'react'

import { graphql, StaticQuery } from 'gatsby'
import { ExternalLink, ExternalLinkProps } from './Links'
import styled from 'styled-components'

const SocialMediaLink: SFC<ExternalLinkProps> = ({ link, link: { name } }) => (
  <ExternalLink link={link}>
    {
      {
        facebook: <FaFacebookF />,
        instagram: <FaInstagram />,
        twitter: <FaTwitter />,
        default: <span>{name}</span>,
      }[name]
    }
  </ExternalLink>
)
