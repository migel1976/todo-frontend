import styled from 'styled-components';
export const Container = styled.div`
  padding:5px;
  width: 600px;
  border: 1px solid #000;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const LiContainer = styled.div`
  display: flex;
  gap: 5px;
  padding-block:5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const AddItemContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const StatusContainer = styled.div`
  text-decoration: line-through;
`;
