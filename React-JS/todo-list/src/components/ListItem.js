import { useCountContext } from "../context/counter.context";

function ListItem(props) {
  let { todo, index } = props;
  let { markAsComplete } = useCountContext();
  return (
    <>
      <li className="mt-4 d-flex align-items-center  border-3 border-bottom border-success pb-1">
        <button className="btn btn-danger btn-sm" disabled={todo.isCompleted}>
          <span className="fa fa-trash"></span>
        </button>
        <input
          checked={todo.isCompleted}
          type="checkbox"
          className="form-check-input mx-3"
          onChange={() => markAsComplete(index)}
          disabled={todo.isCompleted}
        />
        <span
          className={todo.isCompleted ? "text-decoration-line-through" : ""}
        >
          {todo.name}
        </span>
      </li>
    </>
  );
}

export default ListItem;
