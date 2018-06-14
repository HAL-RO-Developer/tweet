gitimport axios from 'axios'

const api = axios.create({
    baseURL: 'https://twitterserver-gvtvhgtcuy.now.sh/api', // バックエンドB のURL:port を指定する
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
    tweet(name, body, image){
        return api.post('/tweet',{
            name,
            body,
            image
        })
    }
    tweets(){
        return api.get('/tweets')
    }
}
var http = new Http()
export default http;
