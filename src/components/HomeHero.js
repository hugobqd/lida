import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  color: ${(props) => props.theme.colors.lavender};
  line-height: 0.85;
  padding-top: 3vw;

  h1 {
    font-size: 9vw;
    font-weight: 300;
    text-indent: 100px;
    padding-left: 3rem;
    text-indent: -3rem;
  }
  strong {
    text-transform: uppercase;
    font-weight: 900;
    display: block;
    margin-bottom: 0.2em;
  }
  a,
  .word {
    /* background-color: orange; */
    display: inline-block;
    line-height: 0.67;
    height: 0.9em;
    vertical-align: baseline;
    overflow: hidden;
    text-indent: 0;
  }
  a {
    color: #fff;
    box-shadow: 0 0.3vw 0 0 #fff;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
  .padding {
    /* display: block; */
  }
`;

const HomeHero = () => {
  return (
    <Section>
      <h1>
        <strong>L’image d’après</strong>
        <span className="padding">
          <Link to="/production">production</Link>
          <br />
          <span className="word">et</span>{" "}
          <Link to="/postproduction">postproduction</Link>
          <br />
          <span className="word">de films</span>
        </span>
      </h1>
    </Section>
  );
};

export default HomeHero;
