import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderContainer = styled.div`
background: ${props => props.theme.background}
width: 100%;
`
const Title = styled.h1`
  margin: 0;
  color: #fffdda;
`

const IndexLink = styled(Link)`
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>
      <IndexLink to="/">{siteTitle}</IndexLink>
    </Title>
  </HeaderContainer>
)

export default Header
