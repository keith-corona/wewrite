import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ContactForm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
      
  )
}

export default ContactForm

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
