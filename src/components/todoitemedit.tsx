import { ItemContainer } from '../styles';
import { ITodo } from '../types/todo';
interface TodoItemEditProps {
  title: string;
  todo: ITodo;
  setTitle: (title: string) => void;
  onSave: (todo: ITodo) => Promise<void>;
  onCancel: () => void;
}

export const TodoItemEdit = ({ todo, onSave, onCancel, title, setTitle }: TodoItemEditProps) => {
  return (
    <ItemContainer>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => onSave(todo)}>save</button>
      <button onClick={onCancel}>cancel</button>
    </ItemContainer>
  );
};
