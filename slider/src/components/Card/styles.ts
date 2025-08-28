import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  padding: 16px 24px;
  gap: 20px;
  flex-direction: column;
  border: 1px solid #eee;
  background: #fff;
  overflow: hidden;
  cursor: pointer;
  min-width: 290px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  margin: 0;
  color: #555;
`;
