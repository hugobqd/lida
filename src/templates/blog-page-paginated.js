import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Container from "../components/Container";
import Pagination from "../components/Pagination";
import BlogPostLine from "../components/cell/BlogPostLine";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const pageInfo = this.props.data.allMarkdownRemark.pageInfo;
    return (
      <Layout>
        <Container>
          <Heading>Actualités</Heading>
        </Container>
        {posts.map(({ node }) => {
          return <BlogPostLine node={node} key={node.id} />;
        })}
        <Container>
          <Pagination pageInfo={pageInfo} pt={4} />
        </Container>
      </Layout>
    );
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        itemCount
        pageCount
        perPage
        totalCount
        hasPreviousPage
      }
    }
  }
`;
