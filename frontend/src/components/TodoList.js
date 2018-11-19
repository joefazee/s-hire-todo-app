import React from 'react';
import Todo from './Todo';
import { Icon, Label, Menu, Table, Segment } from 'semantic-ui-react'

class TodoList extends React.Component {
    render() {
        var {todos} = this.props;
        var renderTodos = () => {
             return todos.map((todo) => {
               return (
                  <Todo 
                    key={todo._id} {...todo} 
                    handleRemove={this.props.handleRemove}
                    toggleTodoStatus={this.props.toggleTodoStatus}
                     />  
               );
             });
          };
        return (
            <Segment vertical>
            <Table celled className="ui small table">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Tasks</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
                {todos.length >  0 ? renderTodos() : <Table.Row><Table.HeaderCell>Do you have anything in mind to do?</Table.HeaderCell></Table.Row>}
                </Table.Body>
                </Table>
            </Segment>
            
        );
    }
}

export default TodoList;