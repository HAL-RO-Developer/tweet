class Auth{
    constructor(){
        this.token = ""
    }
    SetToken(t){
        this.token = t
    }
    GetToken(){
        return this.token
    }
}
var auth = new Auth()
window.auth = auth
export default auth;
