import React from 'react'

import { Link, navigate } from 'gatsby'
import posed from 'react-pose'

const Section = posed.section({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

const P = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
})

const IndexPage = () => (
  <Section>
    <h1>Hi people</h1>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <P>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
      voluptatibus beatae at aspernatur! Adipisci, enim dolor. Quo, maiores
      labore aliquid ducimus officia dolorem voluptates tenetur! Aliquid quaerat
      neque alias! In?
    </P>
    <P>
      Reprehenderit, similique at iure necessitatibus non ipsum praesentium
      nihil omnis dicta eius fugiat magnam ut! Ducimus, doloremque adipisci ea,
      enim sequi porro voluptatibus autem vitae beatae aspernatur quo tempore
      excepturi?
    </P>
    <P>
      Corporis accusamus architecto velit voluptates consectetur hic
      consequuntur expedita fugit ut, dolor incidunt odio unde repellat
      voluptatibus doloremque vero totam ducimus maiores natus porro sequi,
      illum odit. Perferendis, molestiae id!
    </P>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/events">Go to events</Link>
  </Section>
)

export default IndexPage
