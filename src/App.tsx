import { useState } from "react";

import {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "./redux";

const App = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const { data, isLoading } = useGetTodosQuery();
  const [addTodo, { isError }] = useAddTodoMutation();
  const [newTodo, setNewTodo] = useState("");
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const [isChecked, setIsChecked] = useState(false);

  if (isLoading) return <h1>...Loading</h1>;

  const onNewTodo = async () => {
    if (newTodo) {
      await addTodo({ title: newTodo, status: false }).unwrap();
      setNewTodo("");
    }
  };

  const onDeleteTodo = async (id) => {
    await deleteTodo(id).unwrap();
  };

  const onUpdateTodo = async (todo) => {
    // const name = prompt() || ''
    // updateProduct({ ...product, name })
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
    updateTodo({ ...todo, status: !todo.status });
  };

  // {data.map((el) => {

  return (
    <>
      <input type="text" onChange={(e) => setFilterValue(e.target.value)} />
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button onClick={onNewTodo}>add </button>
      <ul>
        {filtereData.map((el) => {
          return (
            <>
              {edit && el.id === id ? (
                <div key={el.id}>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <button onClick={() => onSave(el)}>save</button>
                  <button onClick={onCancel}>cancel</button>
                </div>
              ) : (
                <div key={el.id}>
                  <li>
                    <input
                      type="checkbox"
                      checked={el.status}
                      onChange={() => onChangeStatus(el)}
                    />
                    {!el.status ? (
                      <div>{el.title}</div>
                    ) : (
                      <div style={{ textDecoration: "line-through" }}>
                        {el.title}
                      </div>
                    )}
                  </li>
                  <button onClick={() => onUpdateTodo(el.id)}>edit</button>
                  <button onClick={() => onDeleteTodo(el.id)}>delete</button>
                </div>
              )}
              {/* <li key={el.id} onClick={() => onUpdateProduct(el)}>{el.name}</li> */}
            </>
          );
        })}
      </ul>
    </>
  );
};
export default App;
