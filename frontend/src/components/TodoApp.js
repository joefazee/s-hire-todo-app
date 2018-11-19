import React from  'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import Header from './Header';
import TodoModal from './TodoModal';
import {getTodos, addTodo, removeTodo} from '../api/Api';


class TodoApp extends React.Component {

    state = {
        todos: [],
        confirmDelete: undefined
    };

    componentDidMount(){
        this.fetchNewTodos();
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    componentWillUnmount() {
    }

    fetchNewTodos = () => {
        getTodos()
            .then((res) => {
            this.setState(() => ({todos: res}));
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
        if(this.state.confirmDelete) {
            removeTodo(id).then((todo) => {
            this.fetchNewTodos();
            this.handleCloseModal();
            }).catch((err) => console.log(err));
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
        addTodo(task).then((res) => {
            this.fetchNewTodos();
        });
    }

    toggleTodo = (todo) => {
        console.log(todo);
    }

    render() {
        
        return (
   
            <div>
                <Header />
                <TodoModal 
                confirmDelete={this.state.confirmDelete}  
                handleCloseModal={this.handleCloseModal}
                deleteTodoAfterConfirmation={this.deleteTodoAfterConfirmation} />
                <TodoList 
                    todos={this.state.todos}
                    handleDeleteTodos={this.handleDeleteTodos}
                    handleRemove={this.handleRemove}
                    toggleTodo={this.toggleTodo}

                    />
                <AddTodoForm 
                        handleAddNewTodo={this.handleAddNewTodo} />
            </div>
        );
    }
}



export default TodoApp;