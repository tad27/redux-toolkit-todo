import { useDispatch, useSelector } from "react-redux";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import { clearTodos } from "./features/todoSlice";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white max-w-5xl mx-2 lg:mx-auto">
      <h1 className="dark:text-white text-3xl">Redux Todo</h1>
      <NewTodoForm />
      <TodoList />
      {todos.length > 0 && (
        <button
          onClick={() => dispatch(clearTodos())}
          className="my-4 btn-outline btn-error"
        >
          Clear Todos
        </button>
      )}
    </div>
  );
}

export default App;
