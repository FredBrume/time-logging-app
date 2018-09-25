
import React, {Component} from 'react';
import helpers from '../helpers.js';
import TimerActionButton from './TimerActionButton';

class Timer extends Component {

  constructor(props){
    super(props);

    this.handleEditTimer = this.handleEditTimer.bind(this);
    this.handleTrashTimer = this.handleTrashTimer.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
  }

  componentDidMount(){
    this.forceUpdateInterval = setInterval(() => {  //returning an id gotten from setInterval and storing it in a global component as an attribute
      this.forceUpdate();

    }, 50);
  }

  handleStartClick(){
    this.props.onStopClick(this.props.id);
  }

  handleStopClick(){
    this.props.onStopClick(this.props.id)
  }

  componentWillUnMount(){
    clearInterval(this.forceUpdateInterval);
  }


  handleEditTimer(){
    this.props.onEditForm();
  }

  handleTrashTimer(){
    this.props.onTrashClick(this.props.id);
  }

  render(){  //runningSince == Date.now(), then its value is update every 50 seconds using the React method ForceUpdate
    const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        // console.log(!!this.props.runningSince);`
    return(
      <div className= 'ui centered card'>
        <div className='content'>
          <div className= 'header'>
            {this.props.title}
          </div>

          <div className= 'meta'>
            {this.props.project}
          </div>

          <div className= 'center aligned description'>
            <h2>{elapsedString}</h2>
          </div>

          <div className= 'extra content'>
            <span className= 'right floated edit icon'>
              <i className= 'edit icon' onClick={this.handleEditTimer}/>
            </span>
            <span className= 'right floated trash icon'>
              <i className= 'trash icon' onClick={this.handleTrashTimer}/>
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>
           <TimerActionButton
            timerIsRunning= {!!this.props.runningSince}
            onStartClick= {this.handleStartClick}
            onStopClick= {this.handleStopClick}/>
        </div>
      </div>
    );

  }
}

export default Timer;
