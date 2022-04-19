import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Filter from "./components/Filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/pagination";

// const todo ={
//   title: 'Homework',
//   completed : true
// }

const intialTodoList = [
  { title: "Homework", completed: true, id: uuidv4() },
  { title: "Gaming", completed: false, id: uuidv4() },
  { title: "Entertain", completed: false, id: uuidv4() },
];

console.log(intialTodoList);

function App() {
  const [todoList, setTodoList] = useState(intialTodoList);
  const createTodo = (title) => {
    const newTodo = { title, completed: false, id: uuidv4() };
    const oldTodoList = [...todoList];//clone todoList
    oldTodoList.unshift(newTodo);
    setTodoList(oldTodoList);
  };

  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo}/>
      <Filter />
      <PageLimit />
      <TodoList todoList={todoList} />
      <Pagination />
      {/* <button className='btn btn-danger ' ><i class="fa-brands fa-youtube"></i></button> */}
    </div>
  );
}

export default App;
