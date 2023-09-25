import { useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();
  console.log(todos);

  return (
    <>
      <h1>Todos- RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "true" : "false"}</h4>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}</strong> {todo.title}
          </li>
        ))}
      </ol>

      <pre>...</pre>
      <button>Next Todo</button>
    </>
  );
};
