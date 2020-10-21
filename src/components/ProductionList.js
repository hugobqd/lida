import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Row, Col } from "./GridSystem";
import ProductionCell from "./cell/ProductionCell";

const ProductionList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Row>
      {posts &&
        posts.map(({ node }) => (
          <Col key={node.id} span={4}>
            {/* ProductionCell */}
            <ProductionCell node={node} key={node.id} />
          </Col>
        ))}
    </Row>
  );
};

ProductionList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProductionListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "production-post" } } }
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
                    fluid(maxWidth: 1200, quality: 100) {
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
    render={(data, count) => <ProductionList data={data} count={count} />}
  />
);
