import {createStore, combineReducers, applyMiddleware} from 'redux';
import todosReducer from '../reducers/todos';
import eventsReducer from '../reducers/events';
import thunk  from 'redux-thunk';


export default () => {
    const store = createStore(combineReducers({
        todos: todosReducer,
        events: eventsReducer
    }),
    applyMiddleware(thunk)
    );
    return store;
}
