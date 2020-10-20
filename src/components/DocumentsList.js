import React from "react";
import styled from "styled-components";
import { typography, space, color } from "styled-system";
import { Link } from "gatsby";

const DocumentListStyled = styled.div`
  border: 1px solid;
  ${typography}
  ${space}
  ${color}
`;

const DocumentsList = ({ list, ...props }) => {
  return (
    <DocumentListStyled {...props}>
      <h5>Documents</h5>
      <ul>
        {list.map((doc, i) => (
          <li key={i}>
            {console.log("doc", doc.document_item)}
            <Link to={doc.document_item.publicURL}>
              {doc.document_title &&
                `${doc.document_title} (${doc.document_item.extension})`}
              {!doc.document_title && doc.document_item.base}
            </Link>
          </li>
        ))}
      </ul>
    </DocumentListStyled>
  );
};

export default DocumentsList;
