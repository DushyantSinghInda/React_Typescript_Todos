import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todoslist from "./components/todoslist";
import "./App.css";

const App = () => {
  return (
    <main className="main">
      <h1 className="main-heading">TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToDo />
      <Todoslist />
    </main>
  );
};

export default App;
