import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.scss";

import { Provider } from "react-redux";
import { configureStore} from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers";

const store = configureStore({
   reducer: rootReducer,

   middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().prepend([
    (store) => (next) => (action) => {

      next(action);
    }])

});

  const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
    <Provider store={store}>
 
 <App />

 </Provider>
 );

 