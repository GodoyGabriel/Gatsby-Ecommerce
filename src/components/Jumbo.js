import React from "react"
import { StyledJumbo } from "../styles/components"
import Image from './Image';
export default function Jumbo({ siteMetaData }) {
  return (
    <StyledJumbo>
      <div>
        <h2>{siteMetaData.title}</h2>
        <small>{siteMetaData.description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}
