import { useState } from 'react';

import { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from './redux';
import { TodoItem } from './components/todoitem';
import { TodoItemEdit } from './components/todoitemedit';

const App = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const { data, isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [newTodo, setNewTodo] = useState('');
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const [isChecked, setIsChecked] = useState(false);

  if (isLoading) return <h1>...Loading</h1>;

  const onNewTodo = async () => {
    if (newTodo) {
      await addTodo({ title: newTodo, status: false }).unwrap();
      setNewTodo('');
    }
  };

  const onDeleteTodo = async (id) => {
    await deleteTodo(id).unwrap();
  };

  const onUpdateTodo = async (todo) => {
    setEdit(true);
    setId(todo.id);
    setTitle(todo.title);
  };

  const onCancel = () => {
    setEdit(false);
  };

  const onSave = async (todo) => {
    updateTodo({ ...todo, title });
    setEdit(false);
  };

  const filtereData = data.filter((el) => {
    return el.title.toLowerCase().includes(filterValue);
  });

  const onChangeStatus = (todo) => {
    console.log('onChangeStatus is ', todo);
    updateTodo({ ...todo, status: !todo.status });
  };

  // {filtereData.map((el) => {
  // {data.map((el) => {
  // {edit && el.id === id ? (

  return (
    <>
      <input type="text" onChange={(e) => setFilterValue(e.target.value)} />
      <ol>
        {filtereData.map((el) => {
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
