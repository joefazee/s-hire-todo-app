const todoReducerDefaultState = [];

export default (state = todoReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_TODOS':
            return action.todos;
        default: 
            return state;
    }
}