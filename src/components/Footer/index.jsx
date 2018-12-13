import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import AudioToggle from './AudioToggle'
import NextSongButton from './NextSongButton'
import SocialMediaLink from './SocialMediaLink'

const AudioPanel = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  width: 100%;
`

const SocialMediaPanel = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  width: 100%;
`

export const FooterContainer = styled.div`
  align-items: stretch;
  align-content: stretch;
  display: flex;
  justify-content: space-evenly;
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
      <FooterContainer>
        {socialMediaLinks.map(socialMediaLink => (
          <SocialMediaPanel key={`${socialMediaLink.name}-panel`}>
            <SocialMediaLink key={socialMediaLink.name} {...socialMediaLink} />
          </SocialMediaPanel>
        ))}
        <AudioPanel>
          <AudioToggle />
        </AudioPanel>
        <AudioPanel>
          <NextSongButton />
        </AudioPanel>
      </FooterContainer>
    )}
  />
)
