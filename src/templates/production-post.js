import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Heading from "../components/Heading";
// import styled from "styled-components";
import ReactPlayer from "react-player";
import { Row, Col } from "../components/GridSystem";
// import Box from "../components/Box";
import DocumentsList from "../components/DocumentsList";

export const ProductionPostTemplate = ({
  content,
  contentComponent,
  credit,
  date,
  description,
  document_list,
  director,
  featuredimage,
  gallery_list,
  helmet,
  productor,
  selection,
  tags,
  technical,
  title,
  trailer,
  vod,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <Container>
        <Heading mb={3}>{title}</Heading>
      </Container>
      {/* {featuredimage && ( */}
      <PreviewCompatibleImage
        imageInfo={{
          image: featuredimage,
          alt: `Image principale de ${title}`,
        }}
      />
      {/* )} */}
      <Container mt={3}>
        <Row>
          <Col>
            <h4 style={{ textTransform: "uppercase", fontWeight: 900 }}>
              {director}
            </h4>
            {tags && tags.length && (
              <span style={{ textTransform: "capitalize" }}>
                {tags.map((tag) => (
                  <span key={tag + `tag`}>{tag} —</span>
                ))}
              </span>
            )}{" "}
            {date}
          </Col>
          {vod && (
            <Col style={{ textAlign: "right" }}>
              <Link to={vod} target="_blank">
                VOD
              </Link>
            </Col>
          )}
        </Row>
      </Container>

      <Container intro py={3} lineHeight={1.3}>
        <p className="fs-4">{description}</p>
      </Container>

      <Container>
        {trailer && (
          <ReactPlayer
            url={trailer}
            width="100%"
            height="500px"
            controls="true"
            light
            playsinline
          />
        )}

        {gallery_list &&
          gallery_list.map((image) => (
            <div style={{ marginTop: "2rem" }}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: image.gallery_img,
                  alt: image.gallery_caption,
                }}
              />
            </div>
          ))}
      </Container>

      <Container text>
        <PostContent content={content} />
        <br />
        {document_list && <DocumentsList list={document_list} p={3} mb={5} />}
      </Container>

      <Container py={5}>
        <div style={{ fontSize: ".8em" }}>
          <Row>
            <Col span={3}>
              <h4>Fiche technique</h4>
              {technical}
            </Col>
            <Col span={3}>
              <h4>Équipe</h4>
              {credit}
            </Col>
            <Col span={3}>
              <h4>Production</h4>
              {productor}
            </Col>
            <Col span={3}>
              <h4>Séléction</h4>
              {selection}
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  );
};

ProductionPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const ProductionPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <pre
        style={{
          background: "navy",
          fontSize: 10,
          display: "none",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      <ProductionPostTemplate
        post={post}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Film">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        credit={post.frontmatter.credit}
        date={post.frontmatter.date}
        document_list={post.frontmatter.document_list}
        director={post.frontmatter.director}
        featuredimage={post.frontmatter.featuredimage}
        gallery_list={post.frontmatter.gallery_list}
        productor={post.frontmatter.productor}
        selection={post.frontmatter.selection}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        trailer={post.frontmatter.trailer}
        vod={post.frontmatter.vod}
      />
    </Layout>
  );
};

ProductionPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProductionPost;

export const pageQuery = graphql`
  query ProductionPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        credit
        date(formatString: "YYYY")
        description
        document_list {
          document_item {
            id
            publicURL
            base
            extension
          }
          document_title
        }
        director
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery_list {
          gallery_caption
          gallery_img {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        productor
        selection
        tags
        technical
        title
        trailer
        vod
      }
    }
  }
`;
