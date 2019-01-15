import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LogoContainer = styled.div``

const Title = styled(Img)``

const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 375) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Logo = ({ logo }) => (
  <>
    <Title fluid={logo.childImageSharp.fluid} />
  </>
)

export default () => <StaticQuery query={query} render={Logo} />
