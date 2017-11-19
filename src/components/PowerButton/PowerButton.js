import React from 'react';
import './PowerButton.css';


class PowerButton extends React.Component {
  static propTypes = {

  }
  render = () => {
    const state = this.props.state != null ? this.props.state === 1 ? "off" : "on" : "off";
    return (
    <div onClick={this.props.changeState} className="power-button-holder">
      <img className="power-button" src={require('./img/' + state + '.png')} alt="powerButton"/>
    </div>
  )}
}

export default PowerButton;
