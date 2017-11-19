import axios from 'axios';
import {API_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from '../constants/config';
class Api {
    static getToken(authCode){
        return axios.post(`${API_URL}/token`, {
            client_id: CLIENT_ID, 
            client_secret: CLIENT_SECRET,
            grant_type: "authorization_code",
            code: authCode,
            redirect_uri: REDIRECT_URI
        }, {
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

    static getUserControllers(token){
        return axios.get(`${API_URL}/controllers`, {
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
    }
}

export default Api;