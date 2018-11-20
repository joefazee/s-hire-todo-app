import React from 'react';
import { Icon, Table} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {startToggleTodo} from '../state/actions/todos';
import {toggleConfirmDelete} from '../state/actions/events';



const Todo  = (props) =>  {
    return  (

        <Table.Row className={props.status === 'completed' ? 'strikeout' :  'new-todo'}>
            <Table.Cell onClick={() => {    
                props.dispatch(startToggleTodo(props._id));
            }}><Icon name='trash' onClick={(e) => {
                e.stopPropagation();
               props.dispatch(toggleConfirmDelete(props._id));
            }} /> {props.task}</Table.Cell>
      </Table.Row>

    );
   
}

const mapStateToProps = (state) => {
    return {
        confirmDelete: state.events.confirmDelete,
        networkOperation: state.events.networkOperation

    };
  }
  
  export default connect(mapStateToProps)(Todo);