import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"


const ThankYou = () => (

    <div style={{color: `#000`}}>
        
        <Header headerText="Stories from the Sources" link1Text= "Contact"/>
        <Container>
            
            
            <div style={{textAlign: `center`}}>
                <h1 style={{textAlign: `center`, fontSize: `3.5rem`}}>Thank you for your message!</h1> 
                <h2 style={{fontSize: `1.5rem`, paddingBottom: `2rem`, marginBottom: `10rem`}}>While we get a chance to read it, consider checking out our <a href="https://www.ems.ucsb.edu" alt="EMS Website">EMS program</a> at UCSB</h2>
            
                
            </div>
        </Container>
        <Footer footerReturn="Home" linkContact="Contact" footerText="This is a UCSB Linguistics 12 project" footerQtr="Spring" footerYr="2020"/>

    </div>
)

export default ThankYou

