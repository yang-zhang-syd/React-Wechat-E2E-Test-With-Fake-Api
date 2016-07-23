import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'; 
import {autoRehydrate} from 'redux-persist';

const enhencer = compose( 
  autoRehydrate(), 
  applyMiddleware(thunk, reduxImmutableStateInvariant()), 
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhencer
  );
}