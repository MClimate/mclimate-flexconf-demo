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
    return <div className="home">
      <div className="content">
        <h1>{' Home '}</h1>
        <div className="devices-holder">
        {this.state.devices.map( device =><div className="devices"> <div className={"device " + device.type} key={device.id}><img className={device.type} src={require('./img/' + device.type + '.png')}/><p>{device.name}</p></div></div>)}
        </div>
      </div>
    </div>;
  }
}