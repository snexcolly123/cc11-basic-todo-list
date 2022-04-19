import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import Filter from './components/Filter/Filter';
import PageLimit from './components/page-limit/PageLimit';
import TodoList from './components/todo-list/TodoList';
import Pagination from './components/pagination/pagination';

function App() {
  return (
    <div className='container max-w-xs pt-5'>
      <TodoInput />
      <Filter/>
      <PageLimit />
      <TodoList />
      <Pagination />
      {/* <button className='btn btn-danger ' ><i class="fa-brands fa-youtube"></i></button> */}
      
    </div>
  );
}

export default App;
