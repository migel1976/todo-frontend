import { ItemContainer, LiContainer } from '../styles';
import { ITodo } from '../types/todo';

interface TodoItemProps {
  todo: ITodo;
  onUpdateTodo: (todo: ITodo) => void;
  onDeleteTodo: (todo: ITodo) => Promise<void>;
  onChangeStatus: (todo: ITodo) => Promise<void>;
}

export const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo, onChangeStatus }: TodoItemProps) => {
  return (
    <ItemContainer>
      <li>
        <LiContainer>
          <input type="checkbox" checked={todo.status} onChange={() => onChangeStatus(todo)} />
          {!todo.status ? <div>{todo.title}</div> : <div style={{ textDecoration: 'line-through' }}>{todo.title}</div>}
        </LiContainer>
      </li>
      <button onClick={() => onUpdateTodo(todo)}>edit</button>
      <button onClick={() => onDeleteTodo(todo)}>delete</button>
    </ItemContainer>
  );
};
