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
  -webkit-transform: translate(0px, 0px);
  opacity: 1;
}
25% {
  -webkit-transform: translate(-50px, -85px);
  opacity: 1;
  -webkit-animation-timing-function: ease-out;
}
40%{
  -webkit-transform: translate(-25px, -65px);
  opacity: 1;
  -webkit-animation-timing-function: linear;
}
91% {
  -webkit-transform: translate(-10px, -20px);
  opacity: 1;
  -webkit-animation-timing-function: ease-in;
}
100% {
  -webkit-transform: translate(-125px, 50px);
  opacity: 1;
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
const PanningImage = styled(Img)`
  animation: ${PanningKeyFrames} 10s infinite;
`

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
