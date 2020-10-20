import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";

const StyledRow = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  margin-top: ${-1}rem;
  margin-left: ${2 / -2}rem;
  margin-right: ${2 / -2}rem;
  ${layout}
  ${space}

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    margin-top: ${1}rem;
    padding-left: ${2 / 2}rem;
    padding-right: ${2 / 2}rem;
  }
`;

const StyledCol = styled.div`
  /* flex: 1 0 0%; */
  flex: ${(props) => (props.span ? "0 0 auto;" : "1 0 0%")};
  /* width: ${(props) => (props.half ? "50%" : "auto")}; */
  width: ${(props) => (props.span ? `${(props.span / 12) * 100}%` : "auto")};
  ${layout}
  ${space} /* ${(props) =>
    props.red ? "background: red;" : "background: yellow;"}; */
`;

export const Row = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};
export const Col = ({ children, ...rest }) => {
  return <StyledCol {...rest}>{children}</StyledCol>;
};
