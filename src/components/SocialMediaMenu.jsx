import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { IconContext } from 'react-icons'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Link = styled.a`
  color: ${props => props.theme.color};
`

const SocialMediaMenuContainer = styled.div`
  background: ${props => props.theme.background};
  display: flex;
  align-items: center;
`

const SocialMediaLink = ({ name, uri }) => (
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

export default ({ theme }) => (
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
      <IconContext.Provider
        value={{
          className: 'global-class-name',
          size: theme.socialMediaIconSize,
        }}
      >
        <SocialMediaMenuContainer>
          {socialMediaLinks.map(socialMediaLink => (
            <SocialMediaLink key={socialMediaLink.name} {...socialMediaLink} />
          ))}
        </SocialMediaMenuContainer>
      </IconContext.Provider>
    )}
  />
)
