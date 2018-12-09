import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const BackgroundImage = styled.div``

const BlackoutImage = styled(Img)``

export default () => (
  <StaticQuery
    query={graphql`
      query {
        blackoutImage: file(relativePath: { eq: "blackout-image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ blackoutImage }) => (
      <BackgroundImage>
        <BlackoutImage fluid={blackoutImage.childImageSharp.fluid} />
      </BackgroundImage>
    )}
  />
)
