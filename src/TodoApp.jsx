// import { useGetTodosQuery } from "./store/apis";

import { useState } from "react";
import { useGetTodoQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  console.log(todoId);

  return (
    <>
      <h1>Todos- RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={() => setTodoId(todoId + 1)}>Next Todo</button>

      {/* <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}</strong> {todo.title}
          </li>
        ))}
      </ol> */}
    </>
  );
};
