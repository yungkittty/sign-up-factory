import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const configureStore = () => {
  const persistConfig = {key: 'root', storage: AsyncStorage};

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, devToolsEnhancer());

  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(persistReducer(persistConfig, rootReducer)),
    );
  }

  return {store, persistor};
};

export default configureStore;
