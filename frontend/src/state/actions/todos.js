import {getTodos,toggleTodo, removeTodo, addTodo} from '../../api/api';
import {toggleNetworkOperation, toggleConfirmDelete} from './events';

export const addTodos = (todos) => {
    return {
      type: 'ADD_TODOS',
      todos
    }
};

export const startToggleTodo = (id) => {
    return (dispatch) => {
        dispatch(toggleNetworkOperation());
        return toggleTodo(id).then(() => {
            dispatch(startAddTodos());
            dispatch(toggleNetworkOperation());
        });
  
    };
};
        

export const performRemoveTodo = (id) => {
    return (dispatch) => {
        dispatch(toggleNetworkOperation());
        return removeTodo(id).then(() => {
            dispatch(toggleNetworkOperation());
            dispatch(toggleConfirmDelete());
            dispatch(startAddTodos());
        });
  
    };
};


// Fetch todos from API and set the new state
export const startAddTodos  = () => {
    return (dispatch) => {
        dispatch(toggleNetworkOperation());
        getTodos().then((todos) => {
          dispatch(addTodos(todos));
        }).finally(() => dispatch(toggleNetworkOperation()));
    };
  };


export const performAddNewTodo = (task) => {
    return (dispatch) => {
        dispatch(toggleNetworkOperation());
        addTodo(task).then(() => {
         dispatch(startAddTodos());
        }).finally(() => dispatch(toggleNetworkOperation()));
    };
}

export const startTodoWithStatus = (status) => {
    return (dispatch) => {
        dispatch(toggleNetworkOperation());
        getTodos(status === true ? 'completed' : 'all').then((todos) => {
            dispatch(addTodos(todos));
        }).finally(() => dispatch(toggleNetworkOperation()));
    }
}