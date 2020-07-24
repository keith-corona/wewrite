import React from "react"
import { Link } from "gatsby"

export default props => 
    <div style={{display: `flex`, flexDirection: `row`, justifyContent: `space-between`, backgroundColor: `#072B5E`, marginTop: `3rem`, padding: `5rem 2rem`, alignItems: `flex-start`}}>
        <div style={{ display: `flex`, flexDirection: `column`, alignItems: `flex-start`, backgroundColor: `#072B5E`, fontSize: `1.3rem`}}>
            <Link style={{ color: `#EDE90C`, }} to="/">
                <p>{props.footerReturn}</p>
            </Link>

            <Link style={{ color: `#EDE90C`, }} to="contact">
                <p style={{padding: `0`}}>{props.linkContact}</p>
            </Link>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `flex-end`, justifyContent: `center`, backgroundColor: `#072B5E`, marginTop: `0rem`, textAlign: `center` }}>
            <p style={{color: `#EDE90C`, fontSize: `1.3rem`}}>{props.footerText}</p>
            <p style={{margin: `0`, padding: `0`, color: `#EDE90C`}}>{props.footerQtr} {props.footerYr}</p>
        </div>
    </div>