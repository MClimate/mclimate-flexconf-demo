import React from 'react';
import styles from './Device.css';

class Bobbie extends React.Component {
  static propTypes = {

  }
  render = () => {
    const device = this.props.device;
    return (
      <div className={"device " + device.type} key={device.id}>
        <img className="bobbie" src={require('./img/bobbie.png')} />
        <p>{device.name}</p>
      </div>
  )}
}

export default Bobbie;
