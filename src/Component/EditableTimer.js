
import React, {Component} from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends Component{
  constructor(props){
    super(props);
    this.state = {
      editFormOpen: false,
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEditClick(){
    this.openForm();
  }

  handleFormSubmit(props){
    this.props.onFormSubmit(props);
    this.closeForm();
  }

  openForm(){
    this.setState({editFormOpen:true});
  }

  closeForm(){
    this.setState({editFormOpen:false});
  }

  render(){
    if(this.state.editFormOpen){
      return(
        <TimerForm
          id= {this.props.id}
          title= {this.props.title}
          project= {this.props.project}
          onFormSubmit= {this.handleFormSubmit}/>
      );

    }else {
      return(
        <Timer
          id={this.props.id}
          title= {this.props.title}
          project= {this.props.project}
          elapsed = {this.props.elapsed}
          runningSince = {this.props.runningSince}
          onEditForm = {this.handleEditClick}
          onTrashClick = {this.props.onTrashClick}
          onStopClick = {this.props.onStopClick}
          onStartClick = {this.props.onStartClick} />
      );
    }
  }
}

export default EditableTimer;
