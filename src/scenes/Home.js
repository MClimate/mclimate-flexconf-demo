import React from 'react';
import Api from '../services/api';
import Storage from '../services/storage';
import Device from '../components/Device';

export default class Home extends React.Component {

  static isPrivate = true;

  constructor(props){
    super(props);
    this.state = {
      devices: [],
      sensorData: {}
    }
  }

  componentDidMount(){
    const token = Storage.getAccessToken();
    Api.getUserControllers(token).then( ({data}) => {
      this.setState({devices:data._embedded.controller});
    }).then(()=>{
      this.state.devices.map((device) => {
        if(device.type === "melissa" && device.online === true){
          Api.fetchSensorData(token, device.serial_number).then( ({data}) => {
            this.setState({sensorData:data.provider});
          });
          // Api.getControllerLogs(token, device.serial_number).then((data)=>{
          //   console.log(data.data._embedded.command_log[0].executed_resource.state)
          // })
        }
        return device;
      })
    })
  }

  changeDeviceState(sn, state){
    const stateToSend = state === 1 ? "off" : "on";
    const token = Storage.getAccessToken();
    Api.changeDeviceState(token, sn, "switch_on_off", stateToSend);
  }

  changeMelissaState(sn, state){
    const token = Storage.getAccessToken();
    Api.changeMelissaState(token, sn, state);
  }

  render() {
    return <div className="home">
      <div className="content">
        <h1>{' Home '}</h1>
        <div className="devices-holder">
          {this.state.devices.map( device => <Device key={device.id} device={device} sensorData={this.state.sensorData} changeMelissaState={()=>{this.changeMelissaState(device.serial_number, 0)}} changeBobbieState={()=>{this.changeDeviceState(device.serial_number, device.controller_log.relay_state);}} changePlugState={()=>{this.changeDeviceState(device.serial_number, 1);}}/>)}
        </div>
      </div>
    </div>;
  }
}