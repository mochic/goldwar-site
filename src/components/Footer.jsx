import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div``
const Anchor = styled.a``

const Footer = ({ links }) => (
  <FooterWrapper>
    {links.map(({ name, link }) => (
      <Anchor key={name} href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </Anchor>
    ))}
  </FooterWrapper>
)

export default Footer
