import { AsyncStorage } from "react-native";
import { configureStore as preconfigureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";

const configureStore = () => {
  const persistConfig = { key: "root", storage: AsyncStorage };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = preconfigureStore({ reducer: persistedReducer });

  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducer", () => {
      // eslint-disable-next-line
      const nextRootReducer = require("./rootReducer").default;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
};

export default configureStore;
