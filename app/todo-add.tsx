"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function add(name: string, refresh: () => void) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  await fetch("/api/todo/add", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function TodoAdd() {
  const Route = useRouter();
  let [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button
        onClick={async () => {
          await add(name, Route.refresh);
          setName("");
        }}>
        Add
      </button>
    </div>
  );
}
