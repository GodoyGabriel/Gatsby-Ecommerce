import React from "react";
import { Link, graphql } from "gatsby";
import { Jumbo } from "../components";
import { SEO } from "../components";
import styled from 'styled-components';

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

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover{
    transform: scale(1.4);
  }
`

const IndexPage = ({ data }) => {
  const siteMetadata = data.allSite.edges[0].node.siteMetadata;
  return (
    <>
    <SEO title="Home" />
    <Jumbo siteMetaData={siteMetadata}/>
    <Button color="gray">Comprar</Button>
    <Link to="/ThankYou">Go to Thank You</Link>
  </>
  )
}

export default IndexPage
