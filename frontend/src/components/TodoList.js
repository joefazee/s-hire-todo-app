import React from 'react';
import Todo from './Todo';
import { Table, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux';

class TodoList extends React.Component {
    render() {
        var {todos} = this.props;
        var renderTodos = () => {
             return todos.map((todo) => {
               return (
                  <Todo 
                    key={todo._id} {...todo} />  
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


const mapStateToProps = (state) => {
  return {
      todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);