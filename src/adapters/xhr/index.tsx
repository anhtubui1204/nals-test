import Axios from 'axios';

function returnAxiosInstance(){
    return Axios.create({
        baseURL: 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/',
        timeout: 1000,
        headers: {'accept': 'application/json'}
    });
}

export function get(url: string){
    return returnAxiosInstance().get(url);
}

export function post(url: string, body: object){
    return returnAxiosInstance().post(url, body);
}