'use strict';

export const Post = (todo, success) => jQuery.post({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    url: 'api/todo',
    data: JSON.stringify({ note: todo.note }),
    success: success
});

export const Put = (id, todo, success) => jQuery.ajax({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    url: 'api/todo/' + id,
    type: 'PUT',
    data: JSON.stringify(todo),
    success: success
});

export const Delete = (id, success) => jQuery.ajax({
    url: 'api/todo/' + id,
    type: 'DELETE',
    success: success
});
