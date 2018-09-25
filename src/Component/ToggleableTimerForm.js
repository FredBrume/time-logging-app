
import React, {Component} from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }

    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormOpen(){
    this.setState({isOpen: true});
  }

  handleFormClose(){
    this.setState({isOpen: false});
  }

  handleSubmit(props){
    this.props.onFormSubmit(props);
    this.handleFormClose();
  }

  render(){
    if(this.state.isOpen){
      return(
        <TimerForm onFormClose = {this.handleFormClose} onFormSubmit = {this.handleSubmit}/>
      );
    }else{
      return(
        <div className= 'ui basic content center aligned segment'>
          <button className= 'ui basic button icon' onClick= {this.handleFormOpen}>
            <i className= 'plus icon'/>
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
