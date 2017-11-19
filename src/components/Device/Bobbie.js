import React from 'react';
import './Device.css';
import PowerButton from '../PowerButton';


class Bobbie extends React.Component {
  static propTypes = {}
  render = () => {
    const device = this.props.device;
    const deviceStatus = device.online ? "online" : "offline";
    const deviceState =  device.online ? device.controller_log.relay_state === 1 ? "" : "off" : "";
    return (
      <div className={"device " + device.type + " " + deviceStatus + " " + deviceState} key={device.id}>
        <div className="device-upper">
          <div className="image-holder">
           <img className="bobbie" src={device.online ? require('./img/bobbie.png') : require('./img/bobbie-offline.png')} alt="bobbie" />
           {device.online ? <PowerButton state={device.controller_log.relay_state} changeState={this.props.changeBobbieState}/> : <div/>}
          </div>
          <p className="name">{device.name}</p>
          <p className={deviceStatus}>The device is offline.</p>
        </div>

        {device.online 
        ? <div className="info">
          <span className="device-info">cold: {device.controller_log.cold.toFixed(2)}</span>
          <span className="device-info">current: {device.controller_log.current.toFixed(2)}</span>
          <span className="device-info">energy: {device.controller_log.energy.toFixed(2)}</span>
          <span className="device-info">home: {device.controller_log.home.toFixed(2)}</span>
          <span className="device-info">current: {device.controller_log.current.toFixed(2)}</span>
          <span className="device-info">hot: {device.controller_log.hot.toFixed(2)}</span>
          {/* <span className="device-info">load: {device.controller_log.load.toFixed(2)}</span> */}
          <span className="device-info">relay_state: {device.controller_log.relay_state.toFixed(2)}</span>
          <span className="device-info">voltage: {device.controller_log.voltage.toFixed(2)}</span>
        </div>
        : <div/>}
      </div>
  )}
}

export default Bobbie;
