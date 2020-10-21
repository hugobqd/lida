import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import styled from "styled-components";

const Content = styled.div`
  padding-top: 1rem;
  padding-bottom: ${(p) => p.theme.sizes.unit};

  @media (min-width: 1000px) {
    padding-top: calc(1rem + ${(p) => p.theme.sizes.unit});
  }
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <link rel="stylesheet" href="https://use.typekit.net/dyq4dan.css" />
      </Helmet>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
