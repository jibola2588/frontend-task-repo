import axios from 'axios';
import config from './config';

//get token from local storage
let token = localStorage.getItem('token')

console.log(token)

if(token){
    var accessToken = JSON.parse(token)
}

console.log('access token' + accessToken)


export const authAxios = axios.create({
baseURL : config.baseUrl,
headers: { Authorization: `Bearer ${accessToken}`},
 })


