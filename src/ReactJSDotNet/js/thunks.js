'use strict';

import {Delete, Post, Put} from './WebAPI';
import {addToDo, updateToDo, deleteToDo} from './actionCreators';

export const addToDoThunk = todo => (dispatch, getState) => {
    Post(todo, response => {
        dispatch(addToDo(response));
        });
};

export const updateToDoThunk = toDo => (dispatch, getState) => {
    Put(toDo.id, toDo, res => dispatch(updateToDo(res)));
};

export const deleteToDoThunk = toDo => (dispatch, getState) => {
    Delete(toDo.id, () => dispatch(deleteToDo(toDo)));
};
