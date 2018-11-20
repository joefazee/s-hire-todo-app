import React from  'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import Header from './Header';
import TodoModal from './TodoModal';
import { Loader , Segment, Dimmer, Grid} from 'semantic-ui-react'
import {connect} from 'react-redux';

class TodoApp extends React.Component {

    render() {
        
        return (
   
            <Grid centered className="root-grid">
               <Grid.Column tablet={12} computer={8} mobile={14}>
                    <Header />
                    <TodoModal />

                    <Dimmer.Dimmable as={Segment} dimmed={this.props.networkOperation}>
                        <Dimmer active={this.props.networkOperation} inverted>
                        <Loader>Loading</Loader>
                        </Dimmer>
                

                        <TodoList />
                        <AddTodoForm />
                    </Dimmer.Dimmable>
                </Grid.Column>    
            </Grid>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        networkOperation: state.events.networkOperation
    };
  }
  
  export default connect(mapStateToProps)(TodoApp);