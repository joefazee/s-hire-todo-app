
const todoReducerDefaultState = {
    confirmDelete: false,
    networkOperation: false,
    todoInContext: undefined
};

export default (state = todoReducerDefaultState, action) => {
    switch(action.type) {
        case 'TOGGLE_CONFIRM_DELETE':
            return {
                ...state,
                confirmDelete: !state.confirmDelete,
                todoInContext: action.id
            };
        case 'TOGGLE_NETWORK_OPERATION':
            return {
                ...state,
                networkOperation: !state.networkOperation
            };
        default: 
            return state;
    }
}

