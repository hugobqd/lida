import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import HomeHero from "../components/HomeHero";
import HomeFeaturedMovies from "../components/HomeFeaturedMovies";
import Container from "../components/Container";
import Box from "../components/Box";

export const IndexPageTemplate = ({ data }) => {
  // const actu = data.actu.edges;
  // const prod = data;
  return (
    <>
      {/* <pre style={{ background: "linen", fontSize: 10, color: "navy" }}>
        {JSON.stringify(data.feat, null, 2)}
      </pre> */}
      <Container>
        <HomeHero />
        <Box py={4}>
          <HomeFeaturedMovies />
        </Box>
      </Container>
      <BlogList />
    </>
  );
};

const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate data={data} />
    </Layout>
  );
};

export default IndexPage;

/*
export const postProductionPageQuery = graphql`
  query postProductionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
*/

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    prod: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "production-post" }
          featuredpost: { eq: true }
        }
      }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            director
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    actu: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            director
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
