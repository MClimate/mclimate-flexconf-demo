import React from 'react';
import './Device.css';

class SmartPlug extends React.Component {
  static propTypes = {

  }
  render = () => {
    const device = this.props.device;
    const deviceStatus = device.online ? "online" : "offline";
    return (
    <div className={"device " + device.type + " " + deviceStatus} key={device.id}>
      <div className="device-upper">
        <div className="image-holder">
          <img className="smart_plug" src={device.online ? require('./img/smart_plug.png') : require('./img/smart_plug-offline.png')} alt="smartplug" />
        </div>
      </div>
        <p className="name">{device.name}</p>
        <p className={deviceStatus}>The device is offline.</p>
    </div>
  )}
}

export default SmartPlug;
