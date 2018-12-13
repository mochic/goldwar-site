import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.colors.highlight};
`

export const HeaderContainer = styled.div`
  background: none;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>{siteTitle}</Title>
  </HeaderContainer>
)

export default Header
