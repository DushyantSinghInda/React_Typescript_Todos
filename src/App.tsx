import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todoslist from "./components/todoslist";
import * as AiIcons from "react-icons/ai";
import "./App.css";

const App = () => {
  return (
    <main className="main">
      <h1 className="main-heading">
        <AiIcons.AiOutlineCalendar />
        &nbsp; Daily To-do App &nbsp;
        <AiIcons.AiOutlineCalendar />
      </h1>
      <Navbar />
      <AddToDo />
      <Todoslist />
    </main>
  );
};

export default App;
