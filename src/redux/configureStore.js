import {createStore} from 'redux';
// import all the exports in `currentTime`
// to an object called `currentTime`
import * as currentTime from './modules/currentTime';

export const configureStore = () => {
  const store = createStore(currentTime.reducer);

  return store;
}

export default configureStore;
