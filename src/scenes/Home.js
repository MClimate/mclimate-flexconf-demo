import React from 'react';
import Api from '../services/api'
import Storage from '../services/storage'

import Device from '../components/Device'
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
      // console.log(data)
    }).then(()=>{
    this.state.devices.map(device => {
      if(device.type == "melissa" && device.online == true){
        Api.fetchSensorData(token, device.serial_number).then( ({data}) => {
          this.setState({sensorData:data.provider});
          console.log(data.provider)
        })
      }
    })
    
    })

  }

  render() {
    return <div className="home">
      <div className="content">
        <h1>{' Home '}</h1>
        <div className="devices-holder">
          {this.state.devices.map( device => <Device key={device.id} device={device} sensorData={this.state.sensorData}/>)}
        </div>
      </div>
    </div>;
  }
}