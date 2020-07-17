import React from "react"
import { Link } from "gatsby"

export default props => <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `flex-end`, backgroundColor: `#072B5E`, marginBottom: `5rem`, padding: `2rem`, }}>
  <Link style={{ color: `#EDE90C` }} to="/">
    <h1 style={{ marginBottom: `1.5rem`, fontSize: `1.5rem`}}>{props.headerText}</h1>
  </Link>

  <Link to="contact">
    <p style={{ alignSelf: `flex-end`, marginBottom: `1.5rem`, color: `#EDE90C`, fontSize: `1rem`}}>{props.link1Text}</p>
  </Link>

</div>
