import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const BackgroundImage = styled(Img)`
  position: relative;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        theEndBackgroundImage: file(relativePath: { eq: "the-end-album.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImageContainer>
        <BackgroundImage
          fluid={data.theEndBackgroundImage.childImageSharp.fluid}
        />
      </BackgroundImageContainer>
    )}
  />
)
