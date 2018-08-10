import rootReducers from './reducers';
import { createStore } from 'redux';

export function configureStore() {
  const store = createStore(rootReducers);

  return store;
}