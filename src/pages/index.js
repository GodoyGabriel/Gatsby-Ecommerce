import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from "../components"
import { SEO } from "../components"

export const query = graphql`
  query GET_SITEMETADATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description,
            title
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const siteMetadata = data.allSite.edges[0].node.siteMetadata;
  return (
    <>
    <SEO title="Home" />
    <Jumbo siteMetaData={siteMetadata}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/ThankYou">Go to Thank You</Link>
  </>
  )
}

export default IndexPage
