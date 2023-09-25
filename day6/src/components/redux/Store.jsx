import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {  ThunkAction, Action } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import UserSlice from "./UserSlice";

const reducers = combineReducers({
    user: UserSlice.reducer
  });
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
persistStore(store, null, (error) => {
    console.log('State persisted:', error);
  });



// export const persistor = persistStore(store, null, (error) => {
//     console.log(error);
// });

