import fetch from 'isomorphic-fetch';

let apiUrl;
if(process.env.NODE_ENV === 'development') {
    apiUrl = 'http://localhost:4000';
}
else {
    apiUrl = 'https://your.server.address';
}

export function searchSuburbs(text) {
  return fetch(apiUrl + '/api/suburbs/searchsuburb/' + text)
    .then(response => response.json())
    .catch(err => {throw(err);});
}

export function getAuction(suburbId) {
  return fetch(apiUrl + '/api/auctionthisweek/getauctions/' + suburbId)
    .then(response => response.json())
    .catch(err => {throw(err);});
}

export function getUserInfo(token) {
  return fetch(`${apiUrl}/api/wechat/getuserinfo?access_token=${token.access_token}&openid=${token.openid}&lang=zh_CN`)
    .then(response => response.json())
    .catch(err => {throw(err);});
}

export function getAccessToken(code) {
    return fetch(apiUrl + '/api/wechat/getaccesstoken/' + code)
        .then(response => response.json())
        .catch(err => {throw(err);});
}

export function createPromise(data) {
    return fetch(apiUrl + '/api/wechat/createpromise')
        .then(response => resposne.json())
        .catch(err => {throw(err);});
}