import React from 'react';
import { Icon, Table} from 'semantic-ui-react'
var moment = require('moment');

const Todo  = (props) =>  {

    var {task, _id, status, createdAt, updatedAt, toggleTodoStatus, handleRemove} = props;
    return  (

        <Table.Row className={status === 'completed' ? 'strikeout' :  'new-todo'}>
            <Table.Cell onClick={() => {
                toggleTodoStatus(_id);
            }}><Icon name='trash' onClick={(e) => {
                e.stopPropagation();
                handleRemove(_id);
            }} /> {task} - <span className="todo-time"> {moment.unix(createdAt).format('h:mm a')}</span></Table.Cell>
      </Table.Row>

                    

    );
   
}

export default Todo;