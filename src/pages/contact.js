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
          <span className='form-text'>Email</span>
          <br/>
          <input type='email' name='_replyto' id='email-box' />
          <br/>
          <br/>
          <span className='form-text'>Message</span>
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
