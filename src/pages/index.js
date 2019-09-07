import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

export default () => (
  <div className="main">
    <Header headerText="laurence taylor" headerId="index" />
    <Container>
      <div className="clearfix">
        <img
          src={require("../imgs/laurence-taylor.jpg")}
          id="laurence-taylor-picture"
          alt="Laurence Taylor"
        />
        <p>
          I'm a London based full-stack developer and former fraud analyst. I
          graduated from{" "}
          <a
            href="https://www.qmul.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Queen Mary University of London
          </a>{" "}
          in 2017 and recently completed{" "}
          <a
            href="https://makers.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Makers
          </a>
          , a selective coding bootcamp in London. In my spare time I enjoy
          playing five-a-side football, reading, and practicing guitar. I also
          like hoarding domain names.
        </p>

        <p>I am available immediately as a junior software engineer.</p>
      </div>
    </Container>
    <Footer />
  </div>
)
