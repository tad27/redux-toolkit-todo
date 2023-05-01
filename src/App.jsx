import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewTodoForm from "./components/NewTodoForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TodoList from "./components/TodoList";
import { clearTodos } from "./features/todoSlice";

function App() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full flex-grow flex flex-col items-center max-w-5xl mx-2 lg:mx-auto">
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
      <Footer />
    </div>
  );
}

export default App;
