class Storage{
    static setAccessToken(token){
        window.localStorage.setItem('access_token', token);
    }
    static getAccessToken(){
        return window.localStorage.getItem('access_token');
    }
}
export default Storage;