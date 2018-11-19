import React from 'react';

class AddTodoForm extends React.Component {

    state = {
        error: undefined
    }

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if(e.key == 'Enter'){
            const task = e.target.value.trim();
            e.target.value = '';
            const error = this.props.handleAddNewTodo(task);
            this.setState(() => {
                return {error};
            });
          }
    }

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()} className='ui form'>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <input type="text" placeholder="Enter a todo" name="task" onKeyPress={this.handleKeyPress} />
            </form>
        );
    }
}
 
export default AddTodoForm;