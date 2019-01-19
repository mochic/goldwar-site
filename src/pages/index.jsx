import React, { Component } from 'react'

import { Link, StaticQuery, navigate, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'

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
  font-size: 48px;
  justify-content: center;
  animation: ${BlurKeys} 3s;
`

const DrunkKeys = keyframes`
0%{
  left: 0px;
  top: 0px;		
  opacity: 0.5;
}

20%{
  left: 1px;
  top: 1px;		
  opacity: 0.7;
}

24%{
  left: -5px;
  top: -5px;	
  opacity: 0.7;
}

26%{
  left: 2px;
  top: 2px;		
  opacity: 0.3;
}

28%{
  left: 5px;
  top: 5px;		
  opacity: 0.7;
}

30%{
  left: -8px;
  top: -8px;		
  opacity: 0.4;
}

60%{
  left: 2px;
  top: 2px;		
  opacity: 0.8;
}

62%{
  left: 6px;
  top: 6px;		
  opacity: 0.2;
}

65%{
  left: -2px;
  top: -2px;		
  opacity: 0.8;
}

67%{
  left: 1px;
  top: 1px;		
  opacity: 0.4;
}

80%{
  left: 1px;
  top: 1px;		
  opacity: 0.9;
}

85%{
  left: 2px;
  top: 2px;		
  opacity: 0.3;
}

88%{
  left: 5px;
  top: 5px;		
  opacity: 0.5;
}

90%{
  left: 0px;
  top: 0px;		
  opacity: 0.7;
}
`

// const PanningKeyFrames = keyframes`
// 0% {
//   -webkit-transform: translate(0px, 0px);
//   opacity: 1;
// }
// 25% {
//   -webkit-transform: translate(-50px, -85px);
//   opacity: 1;
//   -webkit-animation-timing-function: ease-out;
// }
// 40%{
//   -webkit-transform: translate(-25px, -65px);
//   opacity: 1;
//   -webkit-animation-timing-function: linear;
// }
// 91% {
//   -webkit-transform: translate(-10px, -20px);
//   opacity: 1;
//   -webkit-animation-timing-function: ease-in;
// }
// 100% {
//   -webkit-transform: translate(-125px, 50px);
//   opacity: 1;
// }
// `

// const PanningKeyFrames = keyframes`
// 0% {
//     top: 0px;
//     left: 0px;
// }
// 10% {
//   top: -0px;
//   left: -10px;
//   -webkit-animation-timing-function: ease-out;
// }
// 20%{
//     top: 0px;
//     left: 20px;
//   -webkit-animation-timing-function: linear;
// }
// 30% {
//     top: 0px;
//     left: -30px;
//   -webkit-animation-timing-function: ease-in;
// }
// 40% {
//     top: 0px;
//     left: -40px;
// }
// 50% {
//     top: 0px;
//     left: -35px;
// }
// 60% {
//     top: 0px;
//     left: -20px;
// }
// 70% {
//     top: 0px;
//     left: -15px;
// }
// 80% {
//     top: 0px;
//     left: -10px;
// }
// 90% {
//     top: 0px;
//     left: 0px;
// }
// `

const PanningKeyFrames = keyframes`
0% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  25% {
    transform: translate(-50px, -85px);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  40%{
    transform: translate(-25px, -65px);
    opacity: 1;
    animation-timing-function: linear;
  }
  91% {
    transform: translate(-10px, -20px);
    opacity: 1;
    animation-timing-function: ease-in;
  }
  100% {
    transform: translate(-125px, 50px);
    opacity: 1;
  }
`

const DrunkLogoContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 48px;
  justify-content: center;
  animation: ${DrunkKeys} 10s infinite;
`

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
  justify-content: center;
  width: 100%;

  ${LogosContainer} {
    margin-bottom: 30%;
    height: 30%;
  }
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

const DriftingLogoContainer = styled(DriftingContainer)`
  align-items: center;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 48px;
  justify-content: center;
  animation: ${BlurKeys};
`

const backgroundQuery = graphql`
  query {
    blackoutBackground: file(relativePath: { eq: "blackout-cropped-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BackgroundImageContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100000;
  height: 100vh;
  width: 100vh;
  animation: ${PanningKeyFrames} 10s infinite;
`

const KnockoutLogo = styled.p`
  color: white;
  background: linear-gradient(purple 0%, red 80%),
    linear-gradient(to right, purple 0%, yellow 100%);
  mix-blend-mode: multiply;
  height: 100%;
  width: 100%;
  font-size: 36px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  font-family: frijole;
  transform: none;
`

const Background = () => {
  return (
    <StaticQuery
      query={backgroundQuery}
      render={data => {
        console.log(data)
        return (
          <div>
            <BackgroundImageContainer
              style={{
                background: `url(${
                  data.blackoutBackground.childImageSharp.fluid.src
                })`,
              }}
            >
              <KnockoutLogo>GOLDWAR</KnockoutLogo>
            </BackgroundImageContainer>
          </div>
        )
      }}
    />
  )
}

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
            <feDisplacementMap in="SourceGraphic" in2="" scale="10" />
          </filter>
          <filter id="squiggly2">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </defs>
      </svg>
      <Background />
      {/* <LogosContainer>
        <KnockoutLogo>GOLDWAR</KnockoutLogo>
        <DriftingLogoContainer>GOLDWAR</DriftingLogoContainer>
        <DrunkLogoContainer>GOLDWAR</DrunkLogoContainer>
      </LogosContainer> */}
      <Link to="/events">Go to events</Link>
    </PageContainer>
  )
}

export default IndexPage
