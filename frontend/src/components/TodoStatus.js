import React from 'react';
import {connect} from 'react-redux';
import {startTodoWithStatus} from '../state/actions/todos';


const TodoStatus  = (props) => (

  <div>
    <input type="checkbox" onChange={(e) => {
        props.dispatch(startTodoWithStatus(e.target.checked));
    }}/> Show completed
</div>

);

export default connect()(TodoStatus);