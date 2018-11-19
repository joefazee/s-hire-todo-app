import React from  'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import Header from './Header';
import TodoModal from './TodoModal';
import {getTodos, addTodo, removeTodo, toggleTodo} from '../api/Api';
import { Loader , Segment, Dimmer, Grid} from 'semantic-ui-react'

class TodoApp extends React.Component {

    state = {
        todos: [],
        confirmDelete: undefined,
        networkOperation: false
    };

    componentDidMount(){
        this.fetchNewTodos();
    }

    fetchNewTodos = () => {
        this.networkOperationInProgress();
        getTodos()
            .then((res) => {
                this.setState(() => ({todos: res}));
            }).finally(() => this.networkOperationDone());
    }

    networkOperationInProgress = () => {
        this.setState(() => {
            return {
                networkOperation: true
            }
        });
    }

    networkOperationDone = () => {
        this.setState(() => {
            return {
                networkOperation: false
            }
        });
    }

    handleRemove = (id) => {
        this.setState(() => {
            return {
                confirmDelete: id
            }
        });

       
    }

    deleteTodoAfterConfirmation = (id) => {
        this.networkOperationInProgress();
        if(this.state.confirmDelete) {
            removeTodo(id).then((todo) => {
                this.fetchNewTodos();
                this.handleCloseModal();
            }).catch((err) => console.log(err))
            .finally(() => this.networkOperationDone());
        }
    }

    handleCloseModal = () => {
        this.setState(() => {
            return {
                confirmDelete: undefined
            }
        });
    }

    handleAddNewTodo = (task) => {
        this.networkOperationInProgress();
        addTodo(task).then(() => {
            this.fetchNewTodos();
        }).finally(() => this.networkOperationDone());;
    }

    toggleTodoStatus = (id) => {
        
        toggleTodo(id).then(() => {
            this.fetchNewTodos();
        }).catch((err) => alert('error updating todo..'));
    }

    render() {
        
        return (
   
            <Grid centered className="root-grid">
               <Grid.Column width={6}>
                    <Header />
                    <TodoModal 
                    confirmDelete={this.state.confirmDelete}  
                    handleCloseModal={this.handleCloseModal}
                    deleteTodoAfterConfirmation={this.deleteTodoAfterConfirmation} />

                    <Dimmer.Dimmable as={Segment} dimmed={this.state.networkOperation}>
                        <Dimmer active={this.state.networkOperation} inverted>
                        <Loader>Loading</Loader>
                        </Dimmer>
                

                        <TodoList 
                            todos={this.state.todos}
                            handleDeleteTodos={this.handleDeleteTodos}
                            handleRemove={this.handleRemove}
                            toggleTodoStatus={this.toggleTodoStatus}

                            />
                        <AddTodoForm 
                                handleAddNewTodo={this.handleAddNewTodo} />
                    </Dimmer.Dimmable>
                </Grid.Column>    
            </Grid>
        );
    }
}



export default TodoApp;