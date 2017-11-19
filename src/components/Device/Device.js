import React from 'react';
import styles from './Device.css';

import SmartPlug from './SmartPlug';
import Melissa from './Melissa';
import Bobbie from './Bobbie';

class Device extends React.Component {
  static propTypes = {

  }
  render = () => {
    const device = this.props.device;
    return (
    <div key={device.id} className="devices">
      {device.type == "melissa" && <Melissa device={device} />}
      {device.type == "bobbie" && <Bobbie device={device} />}
      {device.type == "smart_plug" && <SmartPlug device={device} />}
    </div>
  )}
}

export default Device;
