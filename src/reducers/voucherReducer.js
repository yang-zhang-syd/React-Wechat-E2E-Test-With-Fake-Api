import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function voucherReducer(state = initialState.voucherVm, action) {
  switch (action.type) {
    case types.VOUCHER_DETAILS_RECEIVED:
      return action.data;
    default:
      return state;
  }
}