import React, {Component} from 'react';
import Error from './Error';
import Api from '../services/api';
import Storage from '../services/storage';
export default class CallbackURI extends Component {

  static isPrivate = false;

  constructor(props){
    super(props);
    this.state = {
      error: "",
      errDescription: ""
    }
  }

  componentDidMount(){
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    if(params.get('error')){
      this.setState({
        error: params.get('error'),
        errDescription: params.get('error_description')
      })
    }else{
      Api.getToken(code).then(tokenData => {
        Storage.setAccessToken(tokenData.data.auth.access_token)
        this.props.history.push('/home');
      }).catch(error => {
        
        if('response' in error){
          this.setState({
            error: error.response.data.auth.error,
            errDescription: error.response.data.auth.error_description
          })
        }
      })
    }
  }

  render() {
  return <div>{this.state.error && <Error error={this.state.error} desc={this.state.errDescription}/>}</div>;
  }
}