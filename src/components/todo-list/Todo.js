import Button from "../UI/Button";

function Todo(props) {
    const {title , completed} = props;
  return (<li className={`list-group-item d-flex align-items-center p-3 bd-callout bd-callout-${completed ? 'success' : 'warning'}`}>
      <span className="flex-grow-1 " role="button">
        {title}
      </span>
      <div className="btn-group">
        <Button color="outline-info">
          <i class="fa-solid fa-toggle-off"></i>
        </Button>
        <Button color="danger">
          <i class="fa-solid fa-trash-can"></i>
        </Button>
      </div>
    </li>
  );
}

export default Todo;
