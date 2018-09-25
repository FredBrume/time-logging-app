import React, { Component } from 'react';
import EditableTimerList from './Component/EditableTimerList';
import ToggleableTimerForm from './Component/ToggleableTimerForm';
import './App.css';
import { v4 } from 'uuid';

class TimersDashboard extends Component {

  constructor(props){
    super(props);

    this.state ={
      timers:[]
    }

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleTrashTimer = this.handleTrashTimer.bind(this);
    this.handleTimerStopClick = this.handleTimerStopClick.bind(this);
    this.handleTimerStartClick = this.handleTimerStartClick.bind(this);
    this.createTimer = this.createTimer.bind(this);
    this.editTimer = this.editTimer.bind(this);
    this.trashTimer = this.trashTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  handleTimerStopClick(timer_Id){
    this.stopTimer(timer_Id);
  }
  handleTimerStartClick(timer_Id){
    this.startTimer(timer_Id);
  }

  stopTimer(timer_Id){
    const now = Date.now();
    const copiedTimers = this.state.timers.map((timer)=>{
      const lastElapsed = now - timer.runningSince;
      if(timer.id === timer_Id){
        return Object.assign({},timer,{elapsed: timer.elapsed + lastElapsed, runningSince: null });
      }else{
        return timer;
      }
    });

    this.setState({timers:copiedTimers});

  }

  startTimer(timer_Id){
    console.log("Fred");
    const now = Date.now();
    this.setState(this.state.timers.map((timer)=>{
      if(timer.id === timer_Id){
          return Object.assign({},timer,{runningSince: now });
      }else{
        return timer;
      }
    }));
  }

  handleTrashTimer(timer_id){
    this.trashTimer(timer_id);
  }

  handleCreateFormSubmit(timer){
    this.createTimer(timer);
  }

  handleEditFormSubmit(timer){
    this.editTimer(timer);
  }

  createTimer(timer){
    this.setState({timers:this.state.timers.concat(timer)});
  }

  editTimer(attr){
    const copiedTimer = this.state.timers.map((timer)=> {
      if(attr.id === timer.id){
        return Object.assign({},timer,{
          title: attr.title,
          project: attr.project,
        });
      }else{
        return timer;
      }

    });

    this.setState({timers:copiedTimer});
  }

  trashTimer(attr){
    const timers = this.state.timers.filter((timer)=> {
        return(timer.id !== attr);
    });
    this.setState({timers: timers});
  }

 timers = [{
      title: 'Practice squat',
      project: 'Gym Chores',
      id: v4(),
      elapsed: '0000000',
      runningSince: Date.now()
    },
    {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: v4(),
      elapsed: '0000000',
      runningSince: Date.now()
    },
    {
      title:'Learn extreme ironing',
      project:'World Domination',
      id: v4(),
      elapsed:'0000000',
      runningSince:Date.now()
    },
    {
      title:'Learn React',
      project:'Web Domination',
      id: v4(),
      elapsed:'0000000',
      runningSince:Date.now()
    }];

  componentDidMount(){
    this.setState({timers: this.timers});
  }

  render() {
    return (
      <div className= 'ui one column centered grid'>
        <div className= 'column'>
          <EditableTimerList timers= {this.state.timers}
            onFormSubmit= {this.handleEditFormSubmit}
            onTrashClick= {this.handleTrashTimer}
            onStopClick= {this.handleTimerStopClick}
            onStartClick= {this.handleTimerStartClick}/>

          <ToggleableTimerForm  onFormSubmit = {this.handleCreateFormSubmit}/>
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
