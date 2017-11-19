import axios from 'axios'
import { API_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../constants/config'
class Api {
  static getToken (authCode) {
    return axios.post(`${API_URL}/token`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: REDIRECT_URI
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  static getUserControllers (token) {
    return axios.get(`${API_URL}/controllers`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }

  static fetchSensorData (token, sn) {
    return axios.post(`${API_URL}/provider/fetch`, {
      serial_number: sn
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }

  static changeDeviceState (token, sn, command, state) {
    return axios.post(`${API_URL}/provider/send`, {
      serial_number: sn,
      command: command,
      state: state
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }


  static changeMelissaState (token, sn, state) {
    return axios.post(`${API_URL}/provider/send`, {
      serial_number: sn,
      command: 'send_ir_code',
      state: state,
      mode: 0,
      temp: 23,
      fan: 0
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }

  static getControllerLogs (token, sn) {
    return axios.get(`${API_URL}/command_log/` + sn + '?command=send_ir_code&sort=-created&limit=1', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }
}

export default Api
