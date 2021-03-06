import React, { Component } from 'react';
import { Link } from 'react-router';

export default class StatusText extends Component {
  renderStatusText() {
    switch (this.props.timerType) {
    case 'pomodoro':
      return <span>Pomodoro session</span>;
    case 'shortBreak':
      return <span>Short break</span>;
    case 'longBreak':
      return <span>Long break</span>;
    default:
      return <span>Selection</span>;
    }
  }

  render() {

    return (
      <div className="status-text f3 fw7">
        {this.renderStatusText()}
      </div>
    );
  }
}
