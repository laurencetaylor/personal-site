import React from "react"
import { Link } from "gatsby"

export default props => (
  <div id='navbar'>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
    <h1 id={props.headerId}>{props.headerText}</h1>
    <a href='https://github.com/laurencetaylor' target='_blank' class='fa fa-github'></a> | <Link to='/' id='cyan-text'>Home</Link> | <Link to='/cv' id='magenta-text'>CV</Link> | <Link to='/contact' id='yellow-text'>Contact</Link> | <a href='https://laurencetaylor.carbonmade.com/' target='_blank' id='key-text'>Design</a> | <a href='https://www.linkedin.com/in/laurencetaylorlondon/' target='_blank' class='fa fa-linkedin'></a>
  </div>
)
