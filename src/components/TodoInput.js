import { useState } from "react";
import Button from "./UI/Button";

function TodoInput(props) {
  const [todoInput, setTodoInput] = useState("");
  const [TodoError, setTodoError] = useState({
    email: "",
    username: "",
    firstname: "",
  });
  return (
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control is-invalid"
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <Button
          color="success"
          onClick={() => {
            if (!todoInput) {
              setTodoError("Title is required");
            } else {
              props.createTodo(todoInput);
            }
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </Button>

        <Button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setTodoInput("")}
        >
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
      <small className="text-danger">Title is required.</small>
    </>
  );
}
export default TodoInput;
