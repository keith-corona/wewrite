import React from "react"
import { Link } from "gatsby"



const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, color: `green` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{backgroundColor: `red`}}>
      {children}
    </div>
  )
}