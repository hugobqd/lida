import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import Heading from "../components/Heading";
// import { Row, Col } from "../components/GridSystem";
import DocumentsList from "../components/DocumentsList";
import SubContentModuleSwitch from "../components/SubContentModuleSwitch";
import TeamList from "../components/list/TeamList";

export const BasicPageTemplate = ({
  content,
  contentComponent,
  description,
  document_list,
  helmet,
  team_list,
  title,
  parentUrl,
  forcedURL,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <Container>
        <Heading>{title}</Heading>
        {description && (
          <Container intro py={3} ml={0} lineHeight={1.3}>
            <p className="fs-4">{description}</p>
          </Container>
        )}
      </Container>
      <Container text>
        <PostContent content={content} />
        {document_list && <DocumentsList list={document_list} p={3} mb={5} />}
      </Container>
      <TeamList list={team_list} />
      <SubContentModuleSwitch route={forcedURL} />
    </main>
  );
};

BasicPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BasicPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BasicPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        document_list={post.frontmatter.document_list}
        helmet={
          <Helmet titleTemplate="%s | Production">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        team_list={post.frontmatter.team_list}
        title={post.frontmatter.title}
        parentUrl={post.frontmatter.parentUrl}
        forcedURL={post.frontmatter.forcedURL}
      />
    </Layout>
  );
};

BasicPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BasicPage;

export const pageQuery = graphql`
  query BasicPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        parentUrl
        forcedURL
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
        forcedURL
        parentUrl
        team_list {
          team_name
          team_portrait {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          team_text
          team_title
        }
        title
      }
    }
  }
`;
