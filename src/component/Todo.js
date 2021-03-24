const Todo = (props) => {
  return (
    <div className="item-div">
      <li
        onClick={() => props.toggleTodo(props.index)}
        className={props.done ? "done" : ""}
      >
        {props.value}
      </li>
      <button
        className="btn btn__delete"
        onClick={() => props.deleteItem(props.index)}
      ></button>
    </div>
  );
};

export default Todo;
