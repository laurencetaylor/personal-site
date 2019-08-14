import React from "react"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <div>
    <Header headerText='Contact' />
    <p>
      <Container>
      <center>
        <form method='post' action='https://formspree.io/contact@laurencetaylor.co.uk'>
          Email
          <br/>
          <input type='email' name='_replyto' id='email-box' />
          <br/>
          <br/>
          Message
          <br/>
          <textarea name='body' id='body-box' />
          <br/>
          <input type='submit' value='Send' />
        </form>
      </center>
      </Container>
    </p>
  </div>
)
