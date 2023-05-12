import React, { Component } from 'react';

class TimerWrapper extends Component{
    constructor(props){
        super(props)
        this.startTimer = this.startTimer.bind(this);
        this.state ={
            timeLeft: null,
            timer: null
        }
    }

    startTimer(timeLeft){
        clearInterval(this.state.timer)
        let timer = setInterval (()=>{
            let timeLeft = this.state.timeLeft -1
            if (timeLeft === 0){
                clearInterval (timer)
            }
            this.setState({
                timeLeft: timeLeft
            })
        },1000)
        return this.setState({timeLeft: timeLeft, timer: timer})
    }
    render(){
        return(
        <div className='parent'>
            <h2 className='element'>Timer</h2>
            <div className='element'>
                <ButtonStart time="15" startTimer={this.startTimer}/>
            </div>
            <div className='element'>
                <TimerDisplay timeLeft={this.state.timeLeft}/>
            </div>
            
        </div>
        )
    }
}
class ButtonStart extends Component{
    handleStartTimer(){
        return this.props.startTimer(this.props.time)
    }
    render(){
        return <button className='btn' onClick={this.handleStartTimer.bind(this)}>
            Start</button>
    }
}
class TimerDisplay extends Component{
    render(){
        if(this.props.timeLeft === 0 || this.props.timeLeft === null){
            return <div></div>
        }
        return <h1>Залишилось: {this.props.timeLeft}</h1>
    }
}


export default TimerWrapper;