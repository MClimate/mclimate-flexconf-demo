import React from 'react';
import './Device.css';

import SmartPlug from './SmartPlug';
import Melissa from './Melissa';
import Bobbie from './Bobbie';

class Device extends React.Component {
  static propTypes = {

  }
  render = () => {
    const device = this.props.device;
    return (
    <div className="devices">
      {device.type == "melissa" && <Melissa device={device} />}
      {device.type == "bobbie" && <Bobbie device={device} />}
      {device.type == "smart_plug" && <SmartPlug device={device} />}
    </div>
  )}
}

export default Device;
