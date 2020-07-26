import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ()=> {
    const data = useStaticQuery(graphql`
    query {
        mainPhoto: file(relativePath: {eq: "images/going_home.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 400) { 
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return <Img fluid={data.mainPhoto.childImageSharp.fluid} />
}

export default Image