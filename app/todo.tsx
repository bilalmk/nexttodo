"use client";
import { useRouter } from "next/navigation";

async function updateTodo(id: string, isDone: boolean, refresh: () => void) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  await fetch("/api/todo/update", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id: string, refresh: () => void) {
  await fetch("/api/todo/delete?id=${id}", {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({
  todo,
}: {
  todo: { id: string; isDone: boolean; name: string };
}) {
  const Router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e: { target: { checked: boolean } }) => {
          updateTodo(todo.id, e.target.checked, Router.refresh);
        }}
        checked={todo.isDone}
      />
      {todo.name}
      <button
        onClick={(e) => {
          deleteTodo(todo.id, Router.refresh);
        }}>
        Delete
      </button>
    </>
  );
}
