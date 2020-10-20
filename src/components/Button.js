import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledButton = styled(Link)`
  display: inline-block;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.bg};
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: ${(props) => props.theme.colors.link};
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    & {
      transition: none;
    }
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    color: ${(props) => props.theme.colors.bg};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
`;
const StyledHeadingLink = styled(Link)`
  display: inline-block;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.link};
  text-align: center;
  text-decoration: underline;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  padding: 0;
  font-size: inherit;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    & {
      transition: none;
    }
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
`;

const Button = (props) => {
  const { children, to } = props;
  const heading = props.heading || false;

  return (
    <>
      {heading && (
        <h2>
          <StyledHeadingLink to={to}>{children}</StyledHeadingLink>
        </h2>
      )}
      {!heading && <StyledButton to={to}>{children}</StyledButton>}
    </>
  );
};

export default Button;

// export default Button;
