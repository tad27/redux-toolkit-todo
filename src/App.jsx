import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import NewTodoForm from "./components/NewTodoForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TodoList from "./components/TodoList";
import { clearTodos } from "./features/todoSlice";

function App() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen max-w-5xl mx-2 lg:mx-auto">
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
    </>
  );
}

export default App;
