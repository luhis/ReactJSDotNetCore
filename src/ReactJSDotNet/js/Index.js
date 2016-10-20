'use strict';

import {createStore, applyMiddleware} from 'redux';
import {Provider, connect}  from 'react-redux';
import thunk from 'redux-thunk';

import ToDoList from './components/todolist';
import reducer from './reducer';
import {setInitialState} from './actionCreators';
import * as actionCreators from './actionCreators';
import * as thunks from './thunks';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer);
store.dispatch(setInitialState({todos: window.todos}));

const mergedActionCreators = _.merge(actionCreators, thunks);
const RouteAppContainer = connect(state => (state), mergedActionCreators)(ToDoList);

ReactDOM.render(
    <Provider store={store}>
        <RouteAppContainer />
    </Provider>,
    document.getElementById('content')
);
