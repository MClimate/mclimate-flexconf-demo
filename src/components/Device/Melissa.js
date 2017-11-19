import React from 'react';
import './Device.css';

class Melissa extends React.Component {
  static propTypes = {}
  render = () => {
    const device = this.props.device;
    const sensorData = this.props.sensorData;
    
    const deviceStatus = device.online ? "online" : "offline";
    return (
      <div className={"device " + device.type + " " + deviceStatus} key={device.id}>
      <div className="device-upper">
          <div className="image-holder">
        <img className="melissa" src={device.online ? require('./img/melissa.png') : require('./img/melissa-offline.png')} alt="melissa"/>
        </div>
        </div>
        
        <p className="name">{device.name}</p>
        <p className={deviceStatus}>The device is offline.</p>


        {device.online 
        ? <div className="info">
          <span className="device-info">humidity: {sensorData.humidity}%</span>
          {/* <span className="device-info">raw_humidity: {sensorData.raw_humidity}</span> */}
          {/* <span className="device-info">raw_temperature: {sensorData.raw_temperature}</span> */}
          <span className="device-info">temperature: {sensorData.temp}°C </span>
        </div>
        : <div/>}
      </div>



  )
}
}
export default Melissa;
