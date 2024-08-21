import styled from 'styled-components';

export const NavigateButton = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderPage = styled.div`
  h1 {
    text-align: center;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LiContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const BodyContainer = styled.div`
  background: #00aa9e;
`;

export const StyleNavbar = styled.div`
  .navbar-brand {
    padding-left: 20px;
    color: #00aa9e;
  }
`;

export const StyledComment = styled.div<{ $indentLevel: number }>`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: ${({ $indentLevel }) => `${$indentLevel * 32}px`};
`;

export const CommentInfo = styled.div`
  display: flex;
  gap: 4px;
  color: #00f;
  font-size: 10px;
`;

export const CommentToggle = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

export const CommentContent = styled.div`
  background: #00aa8b;
`;
