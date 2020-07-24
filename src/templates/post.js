import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  
  return (
    <div className="post-wrapper">
      <Header headerText="Stories from the Sources" link1Text= "Contact"/>
      <Container>
        <div>
          <h1 className="title">{post.frontmatter.title}</h1><h3 className="author-name">by {post.frontmatter.author}</h3>
          <div className="article-text" dangerouslySetInnerHTML={{ __html: post.html }} />

        </div>
      </Container> 
      <Footer footerReturn="Home" linkContact="Contact" footerText="This is a UCSB Linguistics 12 project" footerQtr="Spring" footerYr="2020"/>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        author
        title
      }
    }
  }
`