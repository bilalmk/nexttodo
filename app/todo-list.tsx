import Todo from "./todo";

const getTodo = async () => {
  let todos = await fetch("https://nexttodo-bilalmk.vercel.app/api/todo/list");
  return todos.json();
};

const TodoList = async () => {
  const { todos } = await getTodo();
  return (
    <>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: { id: string; name: string; isDone: boolean }) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
