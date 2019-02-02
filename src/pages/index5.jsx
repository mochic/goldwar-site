import React from 'react'

import { Link, navigate } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'

import Paper from '@material-ui/core/Paper'

import FAB from '../components/FABAudio'

// const DrunkLogoContainer = styled.div`
//   align-items: center;
//   color: ${props => props.theme.colors.highlight};
//   display: flex;
//   font-size: 36px;
//   justify-content: left;
//   padding-left: 20px;
//   margin-left: 2%;
//   text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
//     0px 18px 23px rgba(0, 0, 0, 0.1);
//   background: ${props => props.theme.colors.secondary};
// `

const DrunkLogoContainer = styled(Paper)`
  color: ${props => props.theme.colors.highlight};
  background: ${props => props.theme.colors.secondary} !important;
  display: flex;
  padding-left: 3%;
  font-size: 40px;
  width: 100%;
  margin-left: 5%;
`

const DrunkLogo = () => {
  return (
    <DrunkLogoContainer square elevation={8}>
      GOLDWAR
    </DrunkLogoContainer>
  )
}

const NavListContainer = styled.ul`
  margin-top: 120px;
  list-style-type: none;
  padding-left: 0px;
`

const NavListItemContainer = styled.li`
  color: ${props => props.theme.colors.highlight};
  font-size: 24px;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`

const LinkThing = styled(Link)`
  color: ${props => props.theme.colors.highlight};
  text-decoration: none;
`

const NavListItem = ({ link: { link, name } }) => {
  return (
    <NavListItemContainer>
      <LinkThing to={link}>{name}</LinkThing>
    </NavListItemContainer>
  )
}

const NavListContainerContainer = styled.div`
  padding-left: 26px;
  margin-top: 30%;
  margin-left: 2%;
`

const Social = styled.div`
  align-content: center;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
  font-family: 'roboto mono';
  font-weight: 100;
`
const SocialItem = styled.div`
  font-size: 12px;
`
const SocialDivider = styled.div`
  width: 1px;
  background: ${props => props.theme.colors.highlight};
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
`

const NavList = () => {
  return (
    <NavListContainerContainer>
      <NavListContainer>
        <NavListItem link={{ link: '/cardevents', name: 'events' }} />
        <NavListItem link={{ link: '/about', name: 'about' }} />
        <NavListItem link={{ link: '/contact', name: 'contact' }} />
      </NavListContainer>
    </NavListContainerContainer>
  )
}

const AboutLinkContainer = styled(Paper)`
  color: ${props => props.theme.colors.highlight};
  background: ${props => props.theme.colors.primary} !important;
  margin-bottom: 5%;
  display: inline-block; /* so height and width actually take affect */
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* important to show ellipsis, or words will just be broken off */
  margin-left: 10%;
  padding-right: 2%;
  padding-left: 2%;
`

const AboutLink = () => {
  return (
    <div>
      <AboutLinkContainer square elevation={8}>
        <LinkThing to={`/about`}>about</LinkThing>
      </AboutLinkContainer>
    </div>
  )
}

const ContactLinkContainer = styled(Paper)`
  color: ${props => props.theme.colors.highlight};
  background: ${props => props.theme.colors.secondary} !important;
  margin-bottom: 5%;
  display: inline-block; /* so height and width actually take affect */
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* important to show ellipsis, or words will just be broken off */
  margin-left: 10%;
  padding-right: 2%;
  padding-left: 2%;
`

const ContactLink = () => {
  return (
    <div>
      <ContactLinkContainer square elevation={8}>
        <LinkThing to={`/contact`}>contact</LinkThing>
      </ContactLinkContainer>
    </div>
  )
}

// from: https://stackoverflow.com/questions/14191254/dynamic-maximum-width-for-text
const EventsLinkContainer = styled(Paper)`
  color: ${props => props.theme.colors.highlight};
  background: ${props => props.theme.colors.secondary} !important;
  margin-bottom: 5%;
  display: inline-block; /* so height and width actually take affect */
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* important to show ellipsis, or words will just be broken off */
  margin-left: 10%;
  padding-right: 2%;
  padding-left: 2%;
`
// the divs are necessary because the special styling requires display inline-block
const EventsLink = () => {
  return (
    <div>
      <EventsLinkContainer square elevation={8}>
        <LinkThing to={`/events`}>events</LinkThing>
      </EventsLinkContainer>
    </div>
  )
}

const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  opacity: 1;
`

const fontFamilyList = [
  `sriracha`,
  `sue ellen francisco`,
  `major mono display`,
  `karla`,
  `work sans`,
  `monoton`,
  `frijole`,
  `montserrat`,
  `b612 mono`,
  `roboto mono`,
]

const LandingContents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5%;
  padding-top: 5%;
  padding-bottom: 2%;
  font-family: 'roboto mono';
  margin-bottom: 70%;
`

const DriftingContainer = posed.div({
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 1000 },
  },
  exit: { x: 50, y: 50, opacity: 0, transition: { type: 'spring' } },
})

const NavListThing = styled.div`
  font-size: 28px;
`

const IndexPage = () => {
  return (
    <PageContainer>
      <LandingContents>
        <DriftingContainer>
          <DrunkLogo />
        </DriftingContainer>
        <NavListThing>
          <EventsLink />
          <AboutLink />
          <ContactLink />
        </NavListThing>
        {/* <NavList /> */}
        {/* <FAB /> */}
        {/* <Social>
          <SocialItem>facebook</SocialItem>
          <SocialDivider />
          <SocialItem>instagram</SocialItem>
          <SocialDivider />
          <SocialItem>twitter</SocialItem>
        </Social> */}
      </LandingContents>
    </PageContainer>
  )
}

export default IndexPage
