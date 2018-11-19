import React from 'react';
import { Icon, Table} from 'semantic-ui-react'
var moment = require('moment');

const Todo  = (props) =>  {

    var {task, _id, status,toggleTodoStatus, handleRemove} = props;
    return  (

        <Table.Row className={status === 'completed' ? 'strikeout' :  'new-todo'}>
            <Table.Cell onClick={() => {
                toggleTodoStatus(_id);
            }}><Icon name='trash' onClick={(e) => {
                e.stopPropagation();
                handleRemove(_id);
            }} /> {task}</Table.Cell>
      </Table.Row>

    );
   
}

export default Todo;