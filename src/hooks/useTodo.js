import { useEffect, useState } from "react";

function useTodo() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const request = await fetch(`/todo.json`);
      const response = await request.json();
      setTodo(response);
    };
    getTodo();
  }, []);

  return todo;
}

export default useTodo;
