import styled from "styled-components";

export const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 18px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 18px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #83141f;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(204, 0, 0, 0.84);
  }
`;
