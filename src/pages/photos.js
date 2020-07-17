import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Photos = () => {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: {eq: "princip.jpg"}) {
                id
                childImageSharp {
                  fixed (
                      width: 400
                      ) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
        `)
        console.log(data);

    return ( 
        <Layout>
            <Img
                fixed={data.image.childImageSharp.fixed} alt="Gavrilo Princip"
            />
          
        </Layout>
    ) 
}



export default Photos;