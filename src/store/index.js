import configureStore from './configureStore';
import {persistStore} from 'redux-persist'

export const store = configureStore();
export const persistor = persistStore(store);
