import React from 'react';
import './Device.css';

class Melissa extends React.Component {
  static propTypes = {

  }
  render = () => {
    const device = this.props.device;
    return (
      <div className={"device " + device.type} key={device.id}>
        <img className="melissa" src={require('./img/melissa.png')} alt="melissa"/>
        <p>{device.name}</p>
      </div>
  )
}
}
export default Melissa;
