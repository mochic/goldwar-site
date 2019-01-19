import React from 'react'

import { Link, navigate } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'

const DrunkLogoContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 36px;
  justify-content: left;
  padding-left: 20px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
  margin-left: 2%;
`

const NavListContainer = styled.ul`
  margin-top: 120px;
  list-style-type: none;
  padding-left: 0px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
`

const NavListItemContainer = styled.li`
  color: ${props => props.theme.colors.highlight};
  font-family: frijole;
  font-size: 24px;
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
  margin-top: 16%;
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

const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`

const LandingContents = styled.div`
  background: black;
  height: 72vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8%;
  padding-top: 10%;
  padding-bottom: 2%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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

const IndexPage = () => {
  return (
    <PageContainer>
      <LandingContents>
        <DriftingContainer>
          <DrunkLogoContainer>GOLDWAR</DrunkLogoContainer>
        </DriftingContainer>
        <NavList />
        <Social>
          <SocialItem>facebook</SocialItem>
          <SocialDivider />
          <SocialItem>instagram</SocialItem>
          <SocialDivider />
          <SocialItem>twitter</SocialItem>
        </Social>
      </LandingContents>
    </PageContainer>
  )
}

export default IndexPage
