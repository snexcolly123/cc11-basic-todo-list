import Button from "./UI/Button";

function TodoInput() {
  return (
    <>
      <div class="input-group shadow">
        <input
          type="text"
          className="form-control is-invalid"
          placeholder="Enter new todo"
        />
        <Button color="success">
          <i class="fa-solid fa-plus"></i>
        </Button>

        <button type="button" class="btn btn-outline-secondary">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      {/* <small className="text-danger">Title is required.</small> */}
    </>
  );
}
export default TodoInput;
