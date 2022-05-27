import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import postReducer from "./store/reducers/post";
import categoryReducer from './store/reducers/category';
import subCategoryReducer from './store/reducers/subCategory';

import './index.css';
import App from './App';
import authReducer from './store/reducers/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rootReducer = combineReducers({
  post: postReducer,
  category: categoryReducer,
  subCategory: subCategoryReducer,
  auth: authReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
