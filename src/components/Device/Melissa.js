import React from 'react';
import './Device.css';
import PowerButton from '../PowerButton';

class Melissa extends React.Component {
  static propTypes = {}
  render = () => {
    const {device, sensorData} = this.props;
    const deviceStatus = device.online ? "online" : "offline";
    const deviceState =  device.online ? device.state === 1 ? "on" : "off" : "";
    
    return (
      <div className={"device " + device.type + " " + deviceStatus + " " + deviceState} key={device.id}>
      <div className="device-upper">
          <div className="image-holder">
            <img className="melissa" src={device.online ? require('./img/melissa.png') : require('./img/melissa-offline.png')} alt="melissa"/>
            {device.online ? <PowerButton state={device.controller_log.relay_state} changeState={this.props.changeMelissaState}/> : <div/>}
          </div>
        </div>
        
        <p className="name">{device.name}</p>
        <p className={deviceStatus}>The device is offline.</p>

        {device.online 
        ? <div className="info">
          <span className="device-info">humidity: {sensorData.humidity}%</span>
          <span className="device-info">temperature: {sensorData.temp}°C </span>
        </div>
        : <div/>}
      </div>
  )
}
}
export default Melissa;
