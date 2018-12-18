import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// class PanningImage extends Component {
//     render() {
//         return (
//             <PanningImageContainer>
//                 <Image>
//                 </PanningImageContainer>
//         )
//     }
// }

// obviously this is crazy...but maybe its better to code crazy and then retract it back for stuff like this...
const PanningKeyFrames = keyframes`
    0% {
        top: 0px;
    }
    25% {
        top: 1000px;
    }
    50% {
        top: 50px;
    }
    75% {
        top: 200px;
    }
    100% {
        top: 40px;
    }
`

// const KeyFrameTest = keyframes`
//     0% {
//         width: 5%;
//     }
//     100% {
//         width: 100%;
//     }
// `
const PanningImage = styled(Img)``

const query = graphql`
  query {
    blackoutImage: file(relativePath: { eq: "blackout-raw.jpeg" }) {
      childImageSharp {
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const component = ({ blackoutImage }) => (
  <PanningImage fixed={blackoutImage.childImageSharp.fixed} />
)

export default () => <StaticQuery query={query} render={component} />
