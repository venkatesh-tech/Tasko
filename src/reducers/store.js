import { configureStore } from "@reduxjs/toolkit";
import rootReducer from ".";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  });
  let persistor = persistStore(store);
  return { store, persistor };
};
