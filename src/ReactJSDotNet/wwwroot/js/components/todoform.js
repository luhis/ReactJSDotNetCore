'use strict';

const runIfReady = (e, note, func) => {
    e.preventDefault();
    var cleanedNote = note.trim();
    if (!cleanedNote) {
        return;
    }
    func({ note: cleanedNote });
}

export default ({ note, setNewNote, onFormSubmit }) =>
    <form className="todo-form row" onSubmit={(e) => runIfReady(e, note, onFormSubmit)}>
        <div className="col-md-10">
            <textarea type="text"
                      placeholder="New Task..."
                      value={note}
                      onChange={e => setNewNote(e.target.value)}/>
        </div>
        <div className="col-md-2">
            <input className="todo-form-add-task" type="submit" value="Add Task"/>
        </div>
    </form>;
