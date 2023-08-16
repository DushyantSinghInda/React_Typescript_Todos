import { Todo, useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todoslist = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  //   console.log(todosData);

  let filterData = todos;

  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((item: Todo) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              id={`todo-${item.id}`}
              checked={item.completed}
              onChange={() => toggleTodoAsCompleted(item.id)}
            />
            <label htmlFor={`todo-${item.id}`}>{item.task}</label>
            {item.completed && (
              <button type="button" onClick={() => handleDeleteTodo(item.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todoslist;
