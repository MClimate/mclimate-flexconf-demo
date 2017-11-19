import React from 'react';
import './Device.css';

import SmartPlug from './SmartPlug';
import Melissa from './Melissa';
import Bobbie from './Bobbie';

class Device extends React.Component {
  static propTypes = {

  }
  render = () => {
    const {changeBobbieState, changeMelissaState, changePlugState, device, sensorData} = this.props;    
    return (
    <div className="devices">
      {device.type === "melissa" && <Melissa device={device} changeMelissaState={changeMelissaState} sensorData={sensorData}/>}
      {device.type === "bobbie" && <Bobbie device={device} changeBobbieState={changeBobbieState}/>}
      {device.type === "smart_plug" && <SmartPlug device={device} changePlugState={changePlugState} />}
    </div>
  )}
}

export default Device;
