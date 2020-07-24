import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

const Contact = () => (

<div>
<Header headerText="Stories from the Sources" link1Text= "Contact"/>
<h1 id="title">Leave us a note</h1>
    <Container>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="contact" value="contact" />
            <label>
            Name
            <input type="text" name="name" id="name" />
            </label>
            <label>
            E-mail
            <input type="email" name="email" id="email" />
            </label>
            <label>
            Message
            <textarea name="message" id="message" rows="5" />
            </label>
            <button class="btn" type="submit">Send</button>
            <input class="btn" type="reset" value="Clear" />
        </form>
    </Container>
<Footer footerReturn="Home" linkContact="Contact" footerText="This is a UCSB Linguistics 12 project" footerQtr="Spring" footerYr="2020"/>
</div>
)

export default Contact