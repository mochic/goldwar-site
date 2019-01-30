import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const PageTitle = posed.h1({}) // seo

const ContactPageTitle = styled(PageTitle)`
  background: red;
  color: ${props => props.theme.colors.highlight};
`

const StaggeredListItem = posed.li({})

const StaggeredList = posed.ul({})

const ContactInfoListItem = styled(StaggeredListItem)`
  background: blue;
`

const ContactInfoList = styled(StaggeredList)`
  color: ${props => props.theme.colors.highlight};
  list-style: none;
  padding: 0;
`

const ContactInfo = () => {
  return (
    <ContactInfoList>
      <ContactInfoListItem>{`goldwarband@gmail.com`}</ContactInfoListItem>
    </ContactInfoList>
  )
}

const StaggeredForm = posed.form({})

const ContactForm = styled(StaggeredForm)`
  background: yellow;
`

const EmailInput = styled.input``

const NameInput = styled.input``

const SubmitButton = styled.input``

const ContactUs = () => {
  return (
    <ContactForm>
      <NameInput type="text" placeholder="name" />
      <EmailInput type="email" placeholder="email" />
      <SubmitButton type="submit" value="send" />
    </ContactForm>
  )
}

const PageContainer = posed.div({})

const ContactPageContainer = styled(PageContainer)`
  background: seagreen;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
`

export default () => (
  <ContactPageContainer>
    <ContactPageTitle>contact</ContactPageTitle>
    <ContactUs />
    <ContactInfo />
  </ContactPageContainer>
)
