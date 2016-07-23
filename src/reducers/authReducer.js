import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.authVm, action) {
    switch(action.type) {
        case types.USER_ACCESSTOKEN_RECEIVED:
            return {token: action.token, userInfo: state.userInfo};
        case types.USER_INFO_RECEIVED:
            return {token: state.token, userInfo: action.userInfo};
        default:
            return state;
    }
}