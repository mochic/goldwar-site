import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const FadeInContainer = posed.div({})

export const SocialContainer = styled(FadeInContainer)`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
`

export default () => (
  <SocialContainer>
    <FaFacebookF />
    <FaInstagram />
    <FaTwitter />
  </SocialContainer>
)
