import React, { Component } from 'react'

import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import posed from 'react-pose'

import Logo from '../components/Logo'

const LogoContainer = styled.div``

const PageContainer = styled.div`
  align-content: center;
  background: black;
  display: flex;
  flex-direction: column;
  height: 100vh !important;
  justify-content: center;
  width: 100%;

  ${LogoContainer} {
    margin-bottom: 60%;
  }
`

const IndexPage = () => {
  return (
    <PageContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Link to="/events">Go to events</Link>
    </PageContainer>
  )
}

export default IndexPage
