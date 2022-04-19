import Todo from "./Todo";

function TodoList() {
  return <ul className="list-group shadow mt-3">
      <Todo title='Homework' completed={true} />
      <Todo title='Personal project figma' completed={false}/>
      <Todo title='Mid term exam' completed={true}/>
      <Todo title='Lab' completed={true}/>
  </ul>;
}

export default TodoList;
