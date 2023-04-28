import { useSelector } from "react-redux";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white max-w-5xl mx-2 lg:mx-auto">
      <h1 className="dark:text-white text-3xl">Redux Todo</h1>
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
