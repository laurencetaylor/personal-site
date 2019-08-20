import React from "react"
import { Link } from "gatsby"

export default props => (
  <div id='navbar'>
  <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
    <h1>{props.headerText}</h1>
    <Link to='/' id='cyan-text'>HOME</Link> <span className={props.headerId}>|</span> <Link to='/cv' id='magenta-text'>CV</Link> <span className={props.headerId}>|</span> <Link to='/contact' id='yellow-text'>CONTACT</Link> <span className={props.headerId}>|</span> <a href='https://laurencetaylor.carbonmade.com/' target='_blank' rel='noopener noreferrer' id='key-text'>DESIGN</a>
  </div>
)
