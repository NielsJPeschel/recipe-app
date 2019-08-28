import React from "react";
import styled from "styled-components";

const Pagination = ({ incIndex, decIndex, currPage, numPages }) => {
  return (
    <div>
      <PaginationButton onClick={decIndex}>
        <i className="fas fa-chevron-left"></i>
      </PaginationButton>

      <PaginationLocation>
        Page {currPage + 1} of {numPages}
      </PaginationLocation>

      <PaginationButton left={true} onClick={incIndex}>
        <i className="fas fa-chevron-right"></i>
      </PaginationButton>
    </div>
  );
};

export default Pagination;

// styled components

const PaginationButton = styled.button`
  display: inline-block;
  background: rgba(0, 0, 0, 0);
  color: gray;
  border: none;
  cursor: grab;
  padding: 15px;
  border-radius: ${props => (props.left ? "0 10px 10px 0" : "10px 0 0 10px")};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const PaginationLocation = styled.span`
  margin: 0 15px;
  color: gray;
`;
