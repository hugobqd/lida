import React from "react";
import styled from "styled-components";
import { layout, space, typography } from "styled-system";

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${(p) => p.theme.bp[0]} {
    padding-left: ${(p) => p.theme.sizes.unit};
    padding-right: ${(p) => p.theme.sizes.unit};
  }

  ${(p) => (p.intro ? "max-width: 46rem;" : null)}
  ${(p) => (p.text ? "max-width: 38rem;" : null)}

  ${layout}
  ${space}
  ${typography}
`;

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};
export default Container;

// /* @media ${(p) => p.theme.bp[0]} {
//   padding-left: ${(p) => p.theme.sizes.unit};
//   padding-right: ${(p) => p.theme.sizes.unit};
// } */
