import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <div>
    <Header headerText='Laurence Taylor' />
    <p>
      <Container>
        <p>I'm a London based full-stack developer and former fraud analyst.
        I graduated from <a href='https://www.qmul.ac.uk/' target='_blank'>Queen Mary University of London</a> in 2017 and recently completed <a href='https://makers.tech/' target='_blank'>Makers</a>, a highly selective coding bootcamp in London.
        In my spare time I enjoy playing five-a-side football, reading, and practicing guitar.</p>

        <p>I am available immediately as a junior software developer.</p>
      </Container>
    </p>
  </div>
)
