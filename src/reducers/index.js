import {combineReducers} from 'redux';
import searchVm from './searchReducer';
import voucherVm from './voucherReducer';
import authVm from './authReducer';

const rootReducer = combineReducers({
  searchVm,
  voucherVm,
  authVm
});

export default rootReducer;