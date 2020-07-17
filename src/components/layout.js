import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ }}>

      {children}
    </div>
  )
}