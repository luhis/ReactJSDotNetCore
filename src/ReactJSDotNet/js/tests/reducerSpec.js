'use strict';

import reducer from '../reducer';

describe('Reducer in the To Do app', () => {
    it('should handle the "SET_INITIAL_STATE" action', () => {
        const oldState = {
            foo: 'bar',
            message: null
        };
        const newState = reducer(oldState, {
            type: 'SET_INITIAL_STATE',
            state: {
                todos: []
            }
        });
        expect(oldState).toEqual({
            foo: 'bar',
            message: null
        });
        expect(newState).toEqual({
            todos: [],
            newNote: ''
        });
    });

    it('should handle the "ADD_TODO" action', () => {
        const oldState = {
            todos: [],
            newNote: ''
        };
        const newState = reducer(oldState, {
            type: 'ADD_TODO',
            toDo: {
                note: 'Do this'
            }
        });
        expect(oldState).toEqual({
            todos: [],
            newNote: ''
        });
        expect(newState).toEqual({
            todos: [{note: 'Do this'}],
            newNote: ''
        });
    });
    
    it('should handle the "UPDATE_TODO" action', () => {
        const oldState = {
            todos: [{id: 1, done: false, note: 'Do this'}],
            newNote: ''
        };
        const newState = reducer(oldState, {
            type: 'UPDATE_TODO',
            toDo: {
                id: 1,
                done: true,
                note: 'Do this'
            }
        });
        expect(oldState).toEqual({
            todos: [{id: 1, done: false, note: 'Do this'}],
            newNote: ''
        });
        expect(newState).toEqual({
            todos: [{id: 1, done: true, note: 'Do this'}],
            newNote: ''
        });
    });
    
    it('should handle the "DELETE_TODO" action', () => {
        const oldState = {
            todos: [{id: 1, done: false, note: 'Do this'}],
            newNote: ''
        };
        const newState = reducer(oldState, {
            type: 'DELETE_TODO',
            toDo: {
                id: 1,
                done: true,
                note: 'Do this'
            }
        });
        expect(oldState).toEqual({
            todos: [{id: 1, done: false, note: 'Do this'}],
            newNote: ''
        });
        expect(newState).toEqual({
            todos: [],
            newNote: ''
        });
    });

    it('should handle the "SET_NEW_NOTE" action', () => {
        const oldState = {
            todos: [],
            newNote: ''
        };
        const newState = reducer(oldState, {
            type: 'SET_NEW_NOTE',
            newNote: 'hi there'
        });
        expect(oldState).toEqual({
            todos: [],
            newNote: ''
        });
        expect(newState).toEqual({
            todos: [],
            newNote: 'hi there'
        });
    });
});