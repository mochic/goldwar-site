import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`

const About = () => (
  <AboutContainer>
    <p>This is some sample text about a seattle-based band.</p>
  </AboutContainer>
)

export default About
