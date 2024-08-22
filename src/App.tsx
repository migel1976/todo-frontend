import { useState } from 'react';

import { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from './redux';
import { TodoItem } from './components/todoitem';
import { TodoItemEdit } from './components/todoitemedit';
import { ITodo } from './types/todo';

const App = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const { data, isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  if (isLoading) return <h1>...Loading</h1>;

  const onNewTodo = async () => {
    if (newTodo) {
      await addTodo({ title: newTodo, status: false }).unwrap();
      setNewTodo('');
    }
  };

  const onDeleteTodo = async (todo: ITodo) => {
    await deleteTodo(todo.id).unwrap();
  };

  // const onUpdateTodo = async (todo) => {
  const onUpdateTodo = (todo: ITodo) => {
    setEdit(true);
    setId(todo.id);
    setTitle(todo.title);
  };

  const onCancel = () => {
    setEdit(false);
  };

  const onSave = async (todo: ITodo) => {
    await updateTodo({ ...todo, title });
    setEdit(false);
  };

  const filtereData = data?.filter((el: ITodo) => {
    return el.title.toLowerCase().includes(filterValue);
  });

  const onChangeStatus = async (todo: ITodo) => {
    await updateTodo({ ...todo, status: !todo.status });
  };

  return (
    <>
      <input type="text" onChange={(e) => setFilterValue(e.target.value)} />
      <ol>
        {filtereData?.map((el: ITodo) => {
          return (
            <div key={el.id}>
              {edit && el.id === id ? (
                <TodoItemEdit title={title} todo={el} onSave={onSave} onCancel={onCancel} setTitle={setTitle} />
              ) : (
                <TodoItem
                  todo={el}
                  onUpdateTodo={onUpdateTodo}
                  onDeleteTodo={onDeleteTodo}
                  onChangeStatus={onChangeStatus}
                />
              )}
            </div>
          );
        })}
      </ol>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={onNewTodo}>Create new Task</button>
      </div>
    </>
  );
};
export default App;
