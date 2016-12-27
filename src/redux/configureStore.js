import {createStore, bindActionCreators} from 'redux';
// import all the exports in `currentTime`
// to an object called `currentTime`
import * as currentTime from './modules/currentTime';

export const configureStore = () => {
  const store = createStore(currentTime.reducer);

  const actions = {
    currentTime: bindActionCreators(
                  currentTime.actions,
                  store.dispatch)
  }

  // Export an object with `store` and `actions`
  return {store, actions};
}

export default configureStore;
