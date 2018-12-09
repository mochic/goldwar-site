import React from 'react'
import styled from 'styled-components'
import { Icons, PlayButton, Timer } from 'react-soundplayer/components'
import { withSoundCloudAudio } from 'react-soundplayer/addons'

const { SoundCloudLogoSVG } = Icons

const PrevButton = styled.button``

const NextButton = styled.button``

const StickyPlayerContainer = styled.div``

const StickyPlayer = props => {
  const { track } = props

  return (
    <StickyPlayerContainer>
      <PrevButton />
      <PlayButton {...props} />
      <NextButton />
      <h1>{track ? track.title : 'loading...'}</h1>
      <Timer {...props} />
    </StickyPlayerContainer>
  )
}

export default withSoundCloudAudio(StickyPlayer)
