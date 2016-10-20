'use strict';

export default ({ todo, onCheck, onDelete }) =>
    <li className="todo-item list-group-item">
        <div className="row">
            <div className="col-md-1">
                <input type="checkbox" checked={todo
            .done} onChange={() => onCheck({ id: todo.id, note: todo.note, done: !todo.done })}/>
            </div>
            <div className={'col-md-9' + (todo.done ? ' done' : '')}>
                {todo.note}
            </div>
            <div className="col-md-2">
                <button type="button" onClick={() => onDelete(todo)}>Remove</button>
            </div>
        </div>
    </li>;
