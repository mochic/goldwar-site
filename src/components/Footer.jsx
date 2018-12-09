import React from 'react'
import styled from 'styled-components'
import MobilePlayer from './MobilePlayer'
import SocialMediaMenu from './SocialMediaMenu'

const FooterContainer = styled.div`
  align-items: stretch;
  display: flex;
  justify-content: space-between;
`

const Footer = () => (
  <FooterContainer>
    <MobilePlayer />
    <SocialMediaMenu />
  </FooterContainer>
)

export default Footer
