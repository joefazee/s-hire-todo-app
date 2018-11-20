import React from 'react';
import Modal from 'react-modal';
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {performRemoveTodo} from '../state/actions/todos';
import {toggleConfirmDelete} from '../state/actions/events';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#app');


const TodoModal = (props) => (
    <Modal
        isOpen={!!props.confirmDelete}
        contentLabel="Confirm Delete"
        onRequestClose={() => {
            props.dispatch(toggleConfirmDelete());
        }}
        style={customStyles}
        >
        <h3>Are you sure you want to delete?</h3>
        <Button primary onClick={() => {
            props.dispatch(performRemoveTodo(props.todoInContext));
        }}>Yes</Button> 
        <Button secondary onClick={() => {
            props.dispatch(toggleConfirmDelete());
        }}>No</Button>
    </Modal>
);


const mapStateToProps = (state) => {
    return {
        confirmDelete: state.events.confirmDelete,
        networkOperation: state.events.networkOperation,
        todoInContext: state.events.todoInContext
    };
  }
  
  export default connect(mapStateToProps)(TodoModal);