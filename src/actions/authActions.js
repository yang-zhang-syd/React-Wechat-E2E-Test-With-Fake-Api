import * as types from './actionTypes';
import * as dataContext from '../data';

export function getUserAccessToken(code) {
    return dispatch => {
        return dataContext.getAccessToken(code).then(data => {
            dispatch(userAccessTokenReceived(data));
        });
    }
}

export function userAccessTokenReceived(token) {
    return {type: types.USER_ACCESSTOKEN_RECEIVED, token};
}

export function getUserInfo(token) {
    return dispatch => {
        return dataContext.getUserInfo(token).then(res => {
            dispatch(userInfoReceived(res))
        });
    };
}

export function userInfoReceived(userInfo) {
    return {type: types.USER_INFO_RECEIVED, userInfo};
}