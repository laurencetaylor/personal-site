import React from "react"
import { Link } from "gatsby"

export default props => (
  <div id='navbar'>
  <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
    <h1 id={props.headerId}>{props.headerText}</h1>
    <Link to='/' id='cyan-text'>HOME</Link> | <Link to='/cv' id='magenta-text'>CV</Link> | <Link to='/contact' id='yellow-text'>CONTACT</Link> | <a href='https://laurencetaylor.carbonmade.com/' target='_blank' id='key-text'>DESIGN</a>
  </div>
)
