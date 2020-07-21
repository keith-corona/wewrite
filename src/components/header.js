import React from "react"
import { Link } from "gatsby"

export default props => <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `flex-end`, backgroundColor: `#072B5E`, marginBottom: `5rem`, padding: `4rem 2rem .75rem`,}}>
  <Link style={{ color: `#EDE90C`, }} to="/">
    <h1 style= {{padding: `0`, margin: `0`}}>{props.headerText}</h1>
  </Link>

  <Link to="contact">
    <h4 style={{ color: `#EDE90C`, fontSize: `1rem`, padding: `0`, margin: `0`}}>{props.link1Text}</h4>
  </Link>

</div>
