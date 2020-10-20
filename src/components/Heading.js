import React from "react";
import styled, { css } from "styled-components";
import { typography, layout, space } from "styled-system";
// import fluid from "fluid-system";

// const FluidText = styled("h1")(fluid(typography));

const HeadingStyled = styled.div`
  line-height: 0.83;
  font-weight: 900;

  ${(p) =>
    p.blog
      ? css``
      : css`
          text-transform: uppercase;
          padding-left: 0.85em;
          text-indent: -0.85em;
        `}
  ${typography}
  ${layout}
  ${space}
`;

const Heading = ({ children, style, as, ...rest }) => {
  return (
    <>
      <HeadingStyled as={as || "h1"} {...rest}>
        <span>{children}</span>
      </HeadingStyled>
    </>
  );
};

export default Heading;
