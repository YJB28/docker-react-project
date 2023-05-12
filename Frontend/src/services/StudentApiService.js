import axios from 'axios';


const BASE_URL = 'http://localhost:9800/registerUser';


export async function saveData(user){
    return axios.post(BASE_URL,user)
}
