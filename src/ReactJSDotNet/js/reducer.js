'use strict';

import lodash from 'lodash';

const setState = state => {
    const newState = lodash.cloneDeep(state);
    newState.newNote = '';
    return newState;
};

const addToDo = (state, toDo) => {
    const newState = lodash.cloneDeep(state);
    newState.todos.push(toDo);
    newState.newNote = '';
    return newState;
};

const updateToDo = (state, toDo) => {
    const newState = lodash.cloneDeep(state);
    const index = _.findIndex(newState.todos, a => a.id === toDo.id);
    newState.todos[index].done = toDo.done;
    return newState;
};

const deleteToDo = (state, toDo) => {
    const newState = lodash.cloneDeep(state);
    newState.todos= _.filter(newState.todos, a => a.id !== toDo.id);
    return newState;
};

const setNewNote = (state, note) => {
    const newState = lodash.cloneDeep(state);
    newState.newNote= note;
    return newState;
}

export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'SET_INITIAL_STATE':
            return setState(action.state);
        case 'ADD_TODO':
            return addToDo(state, action.toDo);
        case 'UPDATE_TODO':
            return updateToDo(state, action.toDo);
        case 'DELETE_TODO':
            return deleteToDo(state, action.toDo);
        case 'SET_NEW_NOTE':
            return setNewNote(state, action.newNote);
        default:
            return state;
    }
};
