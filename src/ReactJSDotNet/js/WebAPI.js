'use strict';

import SuperAgent from 'superagent';

const runIfSuccessFul = (error, result, func) => {
    if (error === null) {
        func(result.body);
    }
}

export const Post = (todo, success) =>
    SuperAgent
        .post('api/todo')
        .send({ note: todo.note })
        .end((e, res) => runIfSuccessFul(e, res, success));

export const Put = (id, todo, success) =>
    SuperAgent
        .put('api/todo/' + id)
        .send(todo)
        .end((e, res) => runIfSuccessFul(e, res, success));

export const Delete = (id, success) =>
    SuperAgent
        .delete('api/todo/' + id)
        .end((e, res) => runIfSuccessFul(e, res, success));
