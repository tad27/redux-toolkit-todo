import { useDispatch, useSelector } from "react-redux";
import NewTodoForm from "./components/NewTodoForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TodoList from "./components/TodoList";
import { clearTodos } from "./features/todoSlice";

function App() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-2 lg:mx-auto">
      <ThemeSwitcher />
      <h1 className="font-bold my-4 text-3xl">Redux Todo</h1>
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
