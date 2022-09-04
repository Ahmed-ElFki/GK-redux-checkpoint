import React from "react";
import { Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const todos = useSelector((initialState) => initialState);
  return (
    <Stack style={{ marginLeft: "12px" }}>
      {todos.map((todo) => (
        <Task
          id={todo.id}
          description={todo.description}
          isDone={todo.isDone}
        />
      ))}
    </Stack>
  );
}

export default ListTask;
