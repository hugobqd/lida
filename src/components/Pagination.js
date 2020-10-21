import React from "react";
import Button from "./Button";
import { space, layout } from "styled-system";
import styled from "styled-components";

const Nav = styled.nav(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout
);

const Pagination = ({ pageInfo, ...rest }) => {
  const {
    currentPage,
    hasPreviousPage,
    // pageCount,
    // perPage,
    hasNextPage,
  } = pageInfo;
  // hasNextPage doesn't work.
  return (
    <Nav {...rest}>
      {hasPreviousPage && (
        <Button
          disabled={!hasPreviousPage}
          to={`/actualites/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
        >
          {" ← "}
        </Button>
      )}{" "}
      <strong>{currentPage}</strong>{" "}
      {hasNextPage && (
        <Button disabled={!hasNextPage} to={`/actualites/${currentPage + 1}`}>
          {" → "}
        </Button>
      )}
    </Nav>
  );
};

export default Pagination;
