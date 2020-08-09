import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

const Contact = () => (

<div>
<Header headerText="Stories from the Sources" link1Text= "Contact"/>
<h1 id="title">Leave Us a Note</h1>
    <Container>
    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <p>
            <label>Email: <input type="text" name="email" /></label>
        </p>

        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>

        <p>
            <button type="submit">Send</button>
        </p>
    </form>
    </Container>
<Footer footerReturn="Home" linkContact="Contact" footerText="This is a UCSB Linguistics 12 project" footerQtr="Spring" footerYr="2020"/>
</div>
)

export default Contact