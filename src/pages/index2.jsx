import React, { Component } from 'react'

import { Link, navigate } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import Logo from '../components/Logo'
import { defaultCoreCipherList } from 'constants'

const BlurKeys = keyframes`
0% {
    text-shadow: 0 0 32px #FFFDDA;
color: transparent;
}
100%{
    text-shadow: 0 0 0px #FFFDDA;
color: transparent;
}
`

const LogoContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 36px;
  justify-content: center;
  animation: ${BlurKeys} 3s;
`

// const DrunkLogoContainer = styled.div`
//   align-items: center;
//   color: ${props => props.theme.colors.highlight};
//   display: flex;
//   font-family: ${props => props.theme.fonts.primary};
//   font-size: 36px;
//   justify-content: left;
//   animation: ${SquiggleFrames} 0.8s ease-in;
//   padding-left: 20px;
//   background: ${props => props.theme.colors.primary};
//   box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
//     0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
// `

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
`

// const NavListContainer = styled.ul`
//   margin-top: 120px;
//   list-style-type: none;
//   padding-left: 0px;
//   box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
//     0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);

//   li {
//     background: ${props => props.theme.colors.primary};
//   }
//   li:nth-child(odd) {
//     background: ${props => props.theme.colors.secondary};
//   }
// `

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
`

const SocialMediaContainer = styled.div`
  color: ${props => props.theme.colors.highlight};
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 80px;
  margin-top: 0px;
  background: red;
`

const SocialMediaListItemContainer = styled.li`
  color: ${props => props.theme.colors.highlight};
  font-family: frijole;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 26%;
  margin-top: 5%;
`

const NavList = () => {
  return (
    <NavListContainerContainer>
      <NavListContainer>
        <NavListItem link={{ link: '/events', name: 'events' }} />
        <NavListItem link={{ link: '/about', name: 'about' }} />
        <NavListItem link={{ link: '/contact', name: 'contact' }} />
        <SocialMediaListItemContainer>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </SocialMediaListItemContainer>
      </NavListContainer>
    </NavListContainerContainer>
  )
}

// animation: ${SquiggleFrames} 1s infinite;
const LogosContainer = styled.div`
  ${LogoContainer} {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  ${DrunkLogoContainer} {
    top: 0px;
    left: 0px;
    position: absolute;
  }
`

const PageContainer = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh !important;
  width: 100%;
  justify-content: center;
`

const LandingContents = styled.div`
  background: black;
  height: 56vh;
  width: 44vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8%;
  padding-top: 18%;
  padding-bottom: 7%;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
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
      </LandingContents>
    </PageContainer>
  )
}

export default IndexPage
