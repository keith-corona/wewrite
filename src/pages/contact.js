import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

const ContactForm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
      <div>
        <Header headerText="Stories from the Sources" link1Text= "Contact"/>
        <Layout location={location} title={siteTitle}>
            <h1 id="contact-title">Send a Message</h1>
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
                    <input type="text" name="name" id="name" />
                </label>
                </p>
                <p>
                <label>
                    Your email:
                    <br />
                    <input type="email" name="email" id="email" />
                </label>
                </p>
                <p>
                <label>
                    Message:
                    <br />
                    <textarea name="message" id="message" />
                </label>
                </p>
                <p>
                <button type="submit" class="btn">Send</button>
                </p>
            </form>
        </Layout>

        <Footer footerReturn="Home" linkContact="Contact" footerText="This is a UCSB Linguistics 12 project" footerQtr="Spring" footerYr="2020"/>
    </div>
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
