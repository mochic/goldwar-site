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

const Footer = styled.div`
  display: flex;
`

export default () => (
  <StaticQuery
    query={graphql`
      query SocialMediaQuery {
        site {
          siteMetadata {
            socialMediaLinks {
              name
              uri
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { socialMediaLinks },
      },
    }) => (
      <Footer>
        {socialMediaLinks.map(socialMediaLink => (
          <SocialMediaPanel>
            <SocialMediaLink key={socialMediaLink.name} {...socialMediaLink} />
          </SocialMediaPanel>
        ))}
        <AudioPanel>
          <AudioToggle />
        </AudioPanel>
        <AudioPanel>
          <NextSongButton />
        </AudioPanel>
      </Footer>
    )}
  />
)
