import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

import styled from "styled-components";
const PostProductionLine = styled(Link)`
  background-color: ${(props) => props.theme.colors.lavender};
  color: ${(props) => props.theme.colors.greyDarker};
  padding: 1rem 2rem;
  display: block;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PostProductionList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  posts.sort((a, b) => {
    return a.node.frontmatter.title.localeCompare(b.node.frontmatter.title);
  });

  return (
    <>
      {posts &&
        posts.map(({ node: post }) => (
          <PostProductionLine to={post.fields.slug} key={post.id}>
            <article>→ {post.frontmatter.title}</article>
          </PostProductionLine>
        ))}
    </>
  );
};

PostProductionList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PostProductionListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { templateKey: { eq: "postproduction-post" } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PostProductionList data={data} count={count} />}
  />
);
