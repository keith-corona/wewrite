import React from "react"
import { Link } from "gatsby"

export default props => 
    <div className="footer-flex">
        
        <div className="footer-text text-1">
            <Link style={{ color: `#EDE90C`, }} to="/">
                <p>{props.footerReturn}</p>
            </Link>

            <Link style={{ color: `#EDE90C`, }} to="contact">
                <p style={{padding: `0`}}>{props.linkContact}</p>
            </Link>
        </div>

        <div className="footer-text text-2">
            <p style={{color: `#EDE90C`, fontSize: `1.3rem`}}>{props.footerText}</p>
            <p style={{margin: `0`, padding: `0`, color: `#EDE90C`}}>{props.footerQtr} {props.footerYr}</p>
        </div>

    </div>