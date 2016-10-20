'use strict';

export const setInitialState = state => ({ type: 'SET_INITIAL_STATE', state });

export const addToDo = toDo => ({ type: 'ADD_TODO', toDo });

export const updateToDo = toDo => ({ type: 'UPDATE_TODO', toDo });

export const deleteToDo = toDo => ({ type: 'DELETE_TODO', toDo });

export const setNewNote = newNote => ({ type: 'SET_NEW_NOTE', newNote });
