import React from 'react'
import { Link as _Link } from 'gatsby'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  paddinginner: 10px;
`
const Link = styled(_Link)``

const Menu = ({ links }) => (
  <MenuWrapper>
    {links.map(({ name, link }) => (
      <Link key={name} to={link}>
        {name}
      </Link>
    ))}
  </MenuWrapper>
)

export default Menu
