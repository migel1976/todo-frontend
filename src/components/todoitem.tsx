import { ItemContainer, LiContainer } from '../styles';
export const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo, onChangeStatus }) => {
  return (
    <ItemContainer>
      <li>
        <LiContainer>
          <input type="checkbox" checked={todo.status} onChange={() => onChangeStatus(todo)} />
          {!todo.status ? <div>{todo.title}</div> : <div style={{ textDecoration: 'line-through' }}>{todo.title}</div>}
        </LiContainer>
      </li>
      <button onClick={() => onUpdateTodo(todo)}>edit</button>
      <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
    </ItemContainer>
  );
};
