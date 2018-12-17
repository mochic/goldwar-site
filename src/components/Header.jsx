import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.colors.highlight};
  font-family: 'sriracha';
  text-transform: uppercase;
  padding-right: 12px;
`

export const HeaderContainer = styled.div`
  background: none;
  display: flex;
`

const TestButton = styled.button`
  background: yellow;
  height: 44px;
  width: 44px;
`

const ShareMenu = styled.div`
  color: ${props => props.theme.colors.highlight};
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>{siteTitle}</Title>
    {/* <ShareMenu>share</ShareMenu> */}
  </HeaderContainer>
)

export default Header
