import { configureStore } from "@reduxjs/toolkit";

// reducer'ları import et
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

// configureStore - createStore farkları
// 1- varsayılan olarak thunk kurulu gelir
// 2- verilen reducer'ları otomatik olarak birleştirir
// 2- devtools eklentisini destekler
export default configureStore({
  reducer: { counterReducer, crudReducer },
});
