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

const SquiggleFrames = keyframes`
0% {
    opacity: 0;
    filter: url('#squiggly9')
}
10% {
    opacity: 0.1;
    filter: url('#squiggly8')
}
20% {
    opacity: 0.2;
    filter: url('#squiggly7')
}
30% {
    opacity: 0.3;
    filter: url('#squiggly6')
}
40% {
    opacity: 0.4;
    filter: url('#squiggly5')
}
50% {
    opacity: 0.5;
    filter: url('#squiggly4')
}
60% {
    opacity: 0.6;
    filter: url('#squiggly3')
}
70% {
    opacity: 0.7;
    filter: url('#squiggly2')
}
80% {
    opacity: 0.8;
    filter: url('#squiggly1');
}
100% {
    opacity: 1;
    filter: none;
}
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
  animation: ${SquiggleFrames} 0.8s ease-in;
  padding-left: 20px;
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
  justify-content: flex-end;
`

const LandingContents = styled.div`
  background: black;
  height: 55vh;
  width: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10%;
  padding-top: 10%;
  padding-bottom: 10%;
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
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <radialGradient id="rg" r=".9">
            <stop offset="0%" stopColor="#f00" />
            <stop offset="10%" stopColor="#000" />
            <stop offset="20%" stopColor="#f00" />
            <stop offset="30%" stopColor="#000" />
            <stop offset="40%" stopColor="#f00" />
            <stop offset="50%" stopColor="#000" />
            <stop offset="60%" stopColor="#f00" />
            <stop offset="70%" stopColor="#000" />
            <stop offset="80%" stopColor="#f00" />
            <stop offset="90%" stopColor="#000" />
            <stop offset="100%" stopColor="#f00" />
          </radialGradient>
          <rect id="witness" width="300" height="300" fill="url(#rg)" />
          <filter id="fil" primitiveUnits="objectBoundingBox">
            <feImage result="pict2" xlinkHref="#witness" />
            <feDisplacementMap scale="10" in="SourceGraphic" />
          </filter>
          <filter id="squiggly">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
          <filter id="squiggly2">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          </filter>
          <filter id="squiggly3">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
          </filter>
          <filter id="squiggly4">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" />
          </filter>
          <filter id="squiggly5">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
          </filter>
          <filter id="squiggly6">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" />
          </filter>
          <filter id="squiggly7">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="70" />
          </filter>
          <filter id="squiggly8">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" />
          </filter>
          <filter id="squiggly9">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="90" />
          </filter>
          <filter id="squiggly9">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="220" />
          </filter>
          <filter id="squigglyt">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" />
          </filter>
        </defs>
      </svg>
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
