gitimport axios from 'axios'

const api = axios.create({
    baseURL: 'https://caseteambserver-tlbxdwyvvc.now.sh/api', // バックエンドB のURL:port を指定する
    headers: {
      'ContentType': 'application/json',
    },
    responseType: 'json'  
  });

class Http{
    constructor(){
    }
    signin(name, pass){
        return  api.post('/signin',{
            name,
            pass
        })
    }
    signup(name, pass){
        return  api.post('/signup',{
            name,
            pass
        })
    }
}
var http = new Http()
export default http;
