
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './components/TodoApp';
import configureStore from './state/store/configStore';
const todoActions = require('./state/actions/todos');

import './styles/style.scss';

// Create a new redux store
const store = configureStore();

// load and add the todos from api
store.dispatch(todoActions.startAddTodos());

const rootJsx = (
    <Provider store={store}>
        <TodoApp />
    </Provider>
);

ReactDOM.render(rootJsx, document.getElementById('app'));