import React from 'react'

import styled from 'styled-components'
import posed from 'react-pose'

const ListItem = posed.li({
  enter: { y: 0, opacity: 0.5 },
  exit: { y: 50, opacity: 0 },
})

const StaggeredList = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

export default () => (
  <StaggeredList key="list">
    <ListItem key="list-item-one">one</ListItem>
    <ListItem key="list-item-two"> two</ListItem>
    <ListItem key="list-item-three">three</ListItem>
  </StaggeredList>
)
