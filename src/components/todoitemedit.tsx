import { ItemContainer } from '../styles';
export const TodoItemEdit = ({ todo, onSave, onCancel, title, setTitle }) => {
  return (
    <ItemContainer>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => onSave(todo)}>save</button>
      <button onClick={onCancel}>cancel</button>
    </ItemContainer>
  );
};
