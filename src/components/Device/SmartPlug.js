import React from 'react';
import styles from './Device.css';

class SmartPlug extends React.Component {
  static propTypes = {

  }
  render = () => {
    const device = this.props.device;
    return (
      <div className={"device " + device.type} key={device.id}>
        <img className="smart_plug" src={require('./img/smart_plug.png')} />
        <p>{device.name}</p>
      </div>
  )}
}

export default SmartPlug;
