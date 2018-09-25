
import React,{Component} from 'react';

class TimerActionButton extends Component{

  render(){
    if(this.props.timerIsRunning){
      return(
        <div className= 'ui basic attached red button' onClick= {this.props.onStopClick} >
          Stop
        </div>
      );
    }else{
      return(
        <div className='ui basic attached blue button' onClick= {this.props.onStartClick}>
          Start
        </div>
      );
    }

  }

}

export default TimerActionButton;
