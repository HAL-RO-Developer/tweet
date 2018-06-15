class Session{
    constructor(){
    }
    signin(v, name, image){
        localStorage.setItem('name', name)
        localStorage.setItem('icon',image)
        v.$router.push({ path: '/tweet/' + localStorage.getItem('name') })
    }
    signout(v){
        localStorage.removeItem('name')
        localStorage.removeItem('icon')
        v.$router.push({ path: '/' });  
    }
}

var session = new Session()
export default session;