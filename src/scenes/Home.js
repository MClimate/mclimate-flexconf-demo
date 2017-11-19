import React from 'react';
import Api from '../services/api'
import Storage from '../services/storage'

import Device from '../components/Device'
export default class Home extends React.Component {

  static isPrivate = true;

  constructor(props){
    super(props);
    this.state = {
      devices: []
    }
  }

  componentDidMount(){
    const token = Storage.getAccessToken();
    Api.getUserControllers(token).then( ({data}) => {
      this.setState({devices:data._embedded.controller});
    })
  }

  render() {
    return <div className="home">
      <div className="content">
        <h1>{' Home '}</h1>
        <div className="devices-holder">
          {this.state.devices.map( device => <Device device={device} />)}
        </div>
      </div>
    </div>;
  }
}