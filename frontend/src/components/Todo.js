import React from 'react';
import { Icon, Table} from 'semantic-ui-react'
var moment = require('moment');

const Todo  = (props) =>  {

    var {task, _id, status, createdAt, updatedAt, toggleTodoStatus, handleRemove} = props;
    return  (

        <Table.Row className="strikeout">
            <Table.Cell onClick={() => {
                toggleTodoStatus(_id);
            }}><Icon name='trash' onClick={(e) => {
                e.stopPropagation();
                handleRemove(_id);
            }} /> {task} - {moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')}</Table.Cell>
      </Table.Row>

                    

    );
   
}

export default Todo;