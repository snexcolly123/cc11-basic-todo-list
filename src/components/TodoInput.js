import { useState } from "react";
import Button from "./UI/Button";

function TodoInput() {
  const [todoInput, setTodoInput] = useState("");
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
        <Button color="success">
          <i className="fa-solid fa-plus"></i>
        </Button>

        <button type="button" className="btn btn-outline-secondary" onClick={() => setTodoInput('')}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      {/* <small className="text-danger">Title is required.</small> */}
    </>
  );
}
export default TodoInput;
