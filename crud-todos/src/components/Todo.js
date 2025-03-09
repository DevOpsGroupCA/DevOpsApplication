function Todo(props) {
    if (props.todo.isInEditingMode) {
        return (
            <span className="todo-input-wrapper">
                <input
                    type="text"
                    value={props.updateText}
                    onChange={props.handleUpdateText}
                    className="todo-input"
                    placeholder="Edit your todo..."
                />
            </span>
        );
    }
    return (
        <span className="todo-text">{props.todo.text}</span>
    );
}

export default Todo;