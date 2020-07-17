import React from "react"
import {Link, graphql} from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

import Container from "../components/container"
import Flex from "../components/flex"
import Block from "../components/block"
import Layout from "../components/layout"



const IndexPage = ({data}) => (
    <div style={{color: `#000`}}>
        
        <Layout>
            <Header headerText="Stories from the Sources" link1Text= "Contact"/>
            
            <Container>
                <div>
                    <h1>Some text here</h1>
                </div>
                <div>
                    <h1 style={{ margin: `1rem 0` }}>Stories from the Sources:</h1>
                    <h4 style={{ margin: `1rem 0` }}>International Student Reflections of COVID-19 Related Events</h4>
                
                    <p>COVID-19 has had a global effect; one that has been merciless in its spread from nation to nation and industry to industry. In this project, we take a look at 35 student essays which focus on a specific event or story that was brought on by the COVID-19 pandemic. These stories are particularly interesting as the students who produced them are not only non-native English speakers, but they are primarily international students with a large majority coming from China.</p>

                    <p>We encourage you to take a look around and share a story or two that you are particularly drawn to or can relate to.</p>

                    <p>Thank you for your visit; we write for you.</p>
                </div>
            </Container>

        {/* Below is from Tolinski */}
        <ul style={{display: `flex`, flexDirection:`row`, flexWrap: `wrap`, justifyContent: `center`, alignItems: `center`, alignContent: `center`,}}>{data.allMarkdownRemark.edges.map(post => (
            <Link style={{ color: `#0A8189`, fontSize:`2rem` }} to={post.node.frontmatter.path}>
                <div style={{ backgroundColor: `#EDE90C`,  boxShadow: `-.3rem -.3rem .75rem rgb(244, 181, 46, .7),.3rem .3rem .75rem rgb(9, 227, 235, .7), .2rem .2rem .75rem rgb(46, 244, 217, .2)`, margin: `.75rem .75rem`, padding: `.25rem`, height: `15rem`, width: `15rem`, borderRadius: `7px`, display: `flex`, flexDirection:`row`, flexWrap: `wrap`, justifyContent: `center`, alignItems: `center`, alignContent: `center`, maxWidth: `90vw`,}}>
                    <li style={{ color: `#0A8189`, fontSize: `1rem`, width: `15rem`, textAlign: `center`,}}>
                        <Link style={{ color: `#0A8189`, fontSize:`2rem` }} to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
                        <p style={{color: `#65BDB1`, textAlign: `center`}}>by {post.node.frontmatter.author}</p> 
                        <p style={{color: `#65BDB1`, textAlign: `center`}}>from {post.node.frontmatter.hometown}</p>
                    </li>
                </div>
            </Link>
        ))}</ul>


        <Footer footerText="This is a UCSB Linguistics 12 project" footerQtr="Spring" footerYr="2020"/>
        </Layout>

    </div>
)

export const pageQuery = graphql `
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        author
                        hometown
                    }
                }
            }
        }
    }


`

export default IndexPage