import TodoList from "./todo-list";
import TodoAdd from "./todo-add";

export default function Page() {
  return (
    <div>
      <TodoAdd />
      {/*@ts-ignore */}
      <TodoList />
    </div>
  );
}
