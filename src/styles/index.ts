import styled from 'styled-components';
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  width: 800px;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const LiContainer = styled.div`
  display: flex;
  gap: 5px;
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
