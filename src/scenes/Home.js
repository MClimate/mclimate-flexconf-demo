import React from 'react';
import Api from '../services/api'
import Storage from '../services/storage'
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
    return <div>
      <h1>{' Home '}</h1>
      <ul>
      {this.state.devices.map( device => <li>{device.name}</li>)}
      </ul>
    </div>;
  }
}