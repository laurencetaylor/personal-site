import React from "react"
import { Link } from "gatsby"

export default props => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
    <h1>{props.headerText}</h1>
    <a href='https://github.com/laurencetaylor' target='_blank' class='fa fa-github'></a> | <Link to='/'>Home</Link> | <Link to='/cv'>CV</Link> | <Link to='/contact'>Contact</Link> | <a href='https://laurencetaylor.carbonmade.com/' target='_blank'>Design</a> | <a href='https://www.linkedin.com/in/laurencetaylorlondon/' target='_blank' class='fa fa-linkedin'></a>
  </div>
)
