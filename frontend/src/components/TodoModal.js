import React from 'react';
import Modal from 'react-modal';

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
        onRequestClose={props.handleCloseModal}
        style={customStyles}
        >
        <h3>Are you sure you want to delete?</h3>
        <button onClick={() => {
            props.deleteTodoAfterConfirmation(props.confirmDelete);
        }}>Yes</button> 
        <button onClick={props.handleCloseModal}>No</button>
    </Modal>
);
export default TodoModal;