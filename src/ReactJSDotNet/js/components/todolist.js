'use strict';

import lodash from 'lodash';

import ToDoRow from './todorow';
import ToDoForm from './todoform';

export default ({ newNote, todos, addToDoThunk, updateToDoThunk, deleteToDoThunk, setNewNote }) =>
    <div className="todo-content">
        <ToDoForm onFormSubmit={addToDoThunk} setNewNote={setNewNote} note={newNote}/>
        <ul className="todo-list list-group">
            {lodash.map(todos, a => <ToDoRow key={a.id} todo={a} onCheck={updateToDoThunk} onDelete={deleteToDoThunk}/>)}
        </ul>
    </div>;
