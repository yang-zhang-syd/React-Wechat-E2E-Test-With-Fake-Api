import * as dataContext from '../data'; 

let authServerUrl;
let redirectUrl;
if(process.env.NODE_ENV === 'development') {
    authServerUrl = 'http://localhost:4000/authorize';
    redirectUrl = 'http%3A%2F%2Flocalhost%3A3000%2F%23%2Fauth';  
}
else if(process.env.NODE_ENV === 'test') {
    authServerUrl = 'http://localhost:4000/authorize';
    redirectUrl = 'http%3A%2F%2Flocalhost%3A3000%2F%23%2Fauth';
}
else {
    authServerUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    redirectUrl = 'http%3A%2F%2Fmobile.8sapp.cn%2F%23%2Fauth';
}

class Auth {

    constructor() {
        this.appId = 'your-wechat-app-id';
        this._userInfo = {};
        this._accessToken = {};
    }

    isAuthorized() {
        if(this._userInfo.openid) {
            return true;
        }
        else {
            return false;
        }
    }

    requestWechatAuthorize() {
        window.location.assign(`${authServerUrl}?\
appid=${this.appId}&\
redirect_uri=${redirectUrl}&\
response_type=code&\
scope=snsapi_userinfo&\
state=STATE\
#wechat_redirect`);
    }

    set accessToken(token) {
        this._accessToken = token;
    }

    get userInfo() {
        return this._userInfo;
    }

    set userInfo(data) {
        this._userInfo = data;
    }
}

export const auth = new Auth();