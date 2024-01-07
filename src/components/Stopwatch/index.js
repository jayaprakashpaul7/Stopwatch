import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {isStarted: false, sec: 0}

  start = () => {
    this.Id = setInterval(() => {
      this.setState(prev => {
        const {sec} = prev
        return {sec: sec + 1, isStarted: true}
      })
    }, 1000)
  }

  restart = () => {
    clearInterval(this.Id)
    this.setState({sec: 0, isStarted: false})
  }

  stop = () => {
    clearInterval(this.Id)
    this.setState({isStarted: false})
  }

  formatTime = () => {
    const {sec} = this.state
    const min = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor(sec % 60)
      .toString()
      .padStart(2, '0')
    return `${min}:${seconds}`
  }

  getmin = () => {
    const {sec} = this.state
    const min = Math.floor(sec / 60)
    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  getsec = () => {
    const {sec} = this.state

    const seconds = Math.floor(sec % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isStarted} = this.state
    return (
      <div className="bg">
        <div className="watch-c">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-c">
            <div className="timer-clock-icon-c">
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <p>
              {this.getmin()}:{this.getsec()}
            </p>
            <div className="btn-c">
              <button
                type="button"
                disabled={isStarted}
                onClick={this.start}
                className="start-btn"
              >
                Start
              </button>
              <button type="button" onClick={this.stop} className="start-btn">
                Stop
              </button>
              <button
                type="button"
                onClick={this.restart}
                className="start-btn"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
