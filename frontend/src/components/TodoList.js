import React from 'react';
import Todo from './Todo';
import { Icon, Label, Menu, Table, Segment } from 'semantic-ui-react'

class TodoList extends React.Component {
    render() {
        var {todos} = this.props;
        var renderTodos = () => {
            //var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            // if(todos.length === 0) {
            //   return <p className="no-todo">Nothing to do</p>
            // };
            
             return todos.map((todo) => {
               return (
                  <Todo 
                    key={todo._id} {...todo} 
                    handleRemove={this.props.handleRemove}
                    toggleTodo={this.props.toggleTodo}
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
                {renderTodos()}
                </Table.Body>
                </Table>
            </Segment>
            
        );
    }
}

export default TodoList;