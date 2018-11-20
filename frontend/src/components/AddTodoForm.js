import React from 'react';
import {connect} from 'react-redux';
import {performAddNewTodo} from '../state/actions/todos';


const AddTodoForm  = (props) =>  (

    <form onSubmit={(e) => e.preventDefault()} className='ui form'>
    <input type="text" placeholder="Enter a todo" name="task" autoFocus onKeyPress={(e) => {
        if(e.key == 'Enter'){
            props.dispatch(performAddNewTodo(e.target.value.trim()));
            e.target.value = '';
        }
    }} />
    </form>
)
 
export default connect()(AddTodoForm);