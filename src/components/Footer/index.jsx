import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import AudioToggle from './AudioToggle'
import NextSongButton from './NextSongButton'
import SocialMediaLink from './SocialMediaLink'

const AudioPanel = styled.div`
  background: ${props => props.theme.colors.secondary};
`

const SocialMediaPanel = styled.div`
  background: ${props => props.theme.colors.primary};
`

const Footer = styled.div``

const stuff = ({
  site: {
    siteMetadata: { socialMediaLinks },
  },
}) => (
  <Footer>
    {SocialMediaLinks.map(socialMediaLink => (
      <SocialMediaLink key={socialMediaLink.name} {...socialMediaLink} />
    ))}
  </Footer>
)
