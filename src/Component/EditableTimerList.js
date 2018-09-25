
import React, {Component} from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {

  render(){
    const editabletimers = this.props.timers.map((timer) => (

      <EditableTimer
        key= {timer.id}
        id= {timer.id}
        title = {timer.title}
        project = {timer.project}
        elapsed = {timer.elapsed}
        runningSince = {timer.runningSince}
        onFormSubmit = {this.props.onFormSubmit}
        onTrashClick = {this.props.onTrashClick}
        onStopClick = {this.props.onStopClick}
        onStartClick = {this.props.onStartClick} />
    ));

    return(
    <div id= 'timers'>
      {editabletimers}
    </div>
    );
  }
}

export default EditableTimerList;
