import React from "react"

export default props => 
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, backgroundColor: `#072B5E`, marginTop: `3rem`, padding: `7rem`,textAlign: `center` }}>
        <h3 style={{marginTop: `7rem`, color: `#EDE90C`}}>{props.footerText}</h3>
        <h6 style={{margin: `0`, color: `#EDE90C`}}>{props.footerQtr} {props.footerYr}</h6>
    </div>