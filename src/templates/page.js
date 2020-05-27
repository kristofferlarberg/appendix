import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"

const Article = styled.article`
  margin: 2rem;
  padding: 0;
`

const Section = styled.section`
  display: flex;
  width: calc(100vw - 6rem);
`

const Title = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 20vw;
  padding: 0;
  margin: 0;
`

const Descr = styled(Section)`
  width: calc(80vw - 28rem);
  padding: 0;
  margin: 0 12rem;
`

const ImgSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 4rem 0 0 0;
`

const Figure = styled.figure`
  width: calc(90vw - 4rem);
  height: auto;
  margin: 0;
`

const LastLink = styled.h4`
margin: 0;
`

export default function Page({ data }) {
  const page = data.markdownRemark
  let featuredImgFluid = page.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <Article>
        <Section>
          <Title>
            <h3>{page.frontmatter.name}</h3>
            <h4>{page.frontmatter.title}</h4>
            <h4>{page.frontmatter.email}</h4>
            <LastLink>{page.frontmatter.website}</LastLink>
          </Title>
          <Descr>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </Descr>
        </Section>
        <ImgSection>
          <Figure>
            <Img fluid={featuredImgFluid} />
          </Figure>
          <Figure>{/* <Img fluid={featuredImgFluid} /> */}</Figure>
        </ImgSection>
      </Article>
    </Layout>
  )
}

 

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        name
        email
        website
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
