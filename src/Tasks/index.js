import "./style.css";
const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li className={`tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""}`}>
                <button className="tasks__button tasks__button--done">{task.done ? "✓" : ""} </button>
                <span className="tasks__content">{task.content}</span>
                <button className="tasks__button tasks__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;